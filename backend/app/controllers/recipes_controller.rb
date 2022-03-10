class RecipesController < ApplicationController

  def initialize
    @permitted_params = [
        :name,
        :description,
        :time,
        :size,
        :single_pot,
        :level,
        :ingredients => [
            :name,
            :amount,
        ]
    ]
  end

  def before_process_create
    @resource.user = current_user
  end
end