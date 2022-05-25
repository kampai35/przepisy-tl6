class RecipesController < ApplicationController
  before_action :authenticate_request!, only: [:update, :destroy, :create]

  def initialize
    @permitted_params = [
        :name,
        :description,
        :short_description,
        :time,
        :size,
        :image,
        :single_pot,
        :level,
        :tags => [],
        :ingredients => [
            :name,
            :amount,
        ]
    ]
  end

  def before_process_create
    @resource.user = current_user
  end

  def apply_additional_search_conditions
    filters = request.query_parameters

    if filters[:text]
      @collection = @collection
        .or(:tags => /.*#{filters[:text]}.*/i)
        .or(:description => /.*#{filters[:text]}.*/i)
        .or(:name => /.*#{filters[:text]}.*/i)
    end
  end
end