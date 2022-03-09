class Ingredient < Document
   include Mongoid::Document
   field :name, type: String
   field :amount, type: String
   embedded_in :recipe
end