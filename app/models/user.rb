class User < Document
  include Mongoid::Document
  before_save :encrypt_password

  field :username, type: String
  field :password, type: String
  field :access_token, type: String, default: ''
  field :expires_in, type: Integer, default: 0

  validates_presence_of :username, :password
  validates :username, uniqueness: true, length: {minimum: 5, maximum: 25}

  validate do
    if password && (new_record? || password_changed?)
        if not password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)./)
            errors.add(:password, "must include at least one lowercase letter, one uppercase letter, and one digit")
        end
        if password.length < 7
            errors.add(:password, "is too short")
        end
        if password.length > 60
            errors.add(:password, "is too long")
        end
    end
  end

  def self.find_by_token(token)
      user = User.where(access_token: token).first
      return if user.nil? || (user.expires_in < Time.now.to_i)
      user.update_expires!
      user
  end

  def self.find_by_username_and_password(username:, password:)
      resource = User.where(username: username).first
      return if resource.nil? || BCrypt::Password.new(resource.password) != password
      resource
  end

  def refresh_token
    self.access_token = generate_token
    update_expires!
  end

  def update_expires!
    self.expires_in = Time.now + 2.hours
    self.save
  end

  private

  def encrypt_password
    return unless self.password_changed?
    self.password = BCrypt::Password.create(password)
  end

  def generate_token
    loop do
      token = SecureRandom.hex(39)
      break token unless User.where(access_token: token).exists?
    end
  end

end