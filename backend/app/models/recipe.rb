class Recipe < Document
   include Mongoid::Document
   field :name, type: String
   field :image, type: String
   field :description, type: String
   field :short_description, type: String
   field :time, type: Integer
   field :size, type: Integer
   field :tags, type: Array, default: []
   field :single_pot, type: Boolean
   field :level, type: Integer
   belongs_to :user
   embeds_many :ingredients

   validates :tags
end