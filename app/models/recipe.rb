class Recipe < Document
   include Mongoid::Document
   field :name, type: String
   field :description, type: String
   field :time, type: Integer
   field :size, type: Integer
   field :single_pot, type: Boolean
   field :level, type: String
   validates :level, inclusion: { in: %w[Easy Medium Hard] }
   belongs_to :user
   embeds_many :ingredients
end