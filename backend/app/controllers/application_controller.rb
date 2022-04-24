class ApplicationController < ActionController::API
  before_action :authenticate_request!
  before_action :initialize
  before_action :find_collection, only: [:index]
  before_action :find_resource, except: [:index, :create]

  PAGE_LIMIT = 10.freeze

  def index
    render json: serialized_collection
  end

  def show
    render json: serialized_resource
  end

  def create
    @resource = scope.new(scope_params)
    before_process_create
    @resource.save

    if @resource.persisted?
      after_process_create
      render json: serialized_resource, status: :created
    else
      render json: error_response, status: :unprocessable_entity
    end
  end

  def update
    if @resource.update(scope_params)
      after_process_save
      render json: serialized_resource
    else
      render json: error_response, status: :unprocessable_entity
    end
  end

  def destroy
    @resource.destroy
  end

  def find_collection_conditions
    @collection = @collection.order(created_at: :desc)
  end

  def current_page
    params[:page].to_i || 0
  end

  def find_collection
    find_collection_scope
    @collection = @collection.limit(PAGE_LIMIT).offset(current_page * PAGE_LIMIT)
  end

  def find_collection_scope
    @collection = scope.all
    find_collection_conditions
  end

  def find_resource
    @resource ||= scope.where(find_resource_params).first

    unless @resource
      render json: {errors: {:base => ["resource not found"]}}, status: :unprocessable_entity
    end
  end

  def scope
    controller_name.singularize.capitalize.constantize
  end

  def find_resource_params
    {id: params[:id]}
  end

  def after_process_create; end
  def before_process_create;end
  def before_process_save; end
  def after_process_save; end

  private

  def scope_params
    params.require(:data).permit(@permitted_params)
  end

  def authenticate_request!
    if request.headers['Authorization'].present?
      authorize_app(token: request.headers['Authorization'].split(' ').last)
    else
      render json: {errors: {:token => ["can't be blank"]}}, status: :bad_request
    end
  end

  def serialized_collection
    total_amount = find_collection_scope.count
    total_pages = (total_amount / PAGE_LIMIT).ceil
    {
        data: @collection,
        current_page: current_page,
        next_page: (current_page+1) > total_pages ? nil : current_page+1,
        prev_page: (current_page-1) < 0 ? nil : current_page-1
    }
  end

  def serialized_resource
    {data: @resource}
  end

  def common_errors(json = {})
    merge_json = json
    merge_json = merge_json.merge(errors: @resource.errors) if @resource.errors.any?
    merge_json
  end

  def error_response
    {}.merge(common_errors)
  end

  def authorize_app(token:)
    user = User.find_by_token(token)
    if user.nil?
      render json: {errors: {:token => ["invalid token"]}}, status: :unauthorized
    else
      set_current_user(user: user)
    end
  end

  def set_current_user(user:)
    @current_user = user
  end

  def current_user
    @current_user
  end
end