class UsersController < ApplicationController
  before_action :authenticate_request!, only: [:index, :show, :update, :destroy, :me, :update_me]
  before_action :find_resource, except: [:index, :create, :token, :me, :update_me]

  def initialize
    @permitted_params = [
        :email,
        :image,
        :password
    ]
  end

  def token
    @resource = User.find_by_email_and_password(email: scope_params[:email], password: scope_params[:password])
    unless @resource.nil?
      @resource.refresh_token
      render json: serialized_resource
    else
      render json: {errors: {:password => ['incorrect password or username']}}, status: :unprocessable_entity
    end
  end

  def after_process_create
      @resource.refresh_token
  end

  def me
      @resource = @current_user
      render json: serialized_resource
  end

  def update
      render json: {errors: {:base => ['feature temporary disabled']}}, status: :forbidden
  end

  def update_me
      @resource = @current_user

      unless User.find_by_email_and_password(email: @current_user.email, password: scope_params[:current_password])
          render json: {errors: {:current_password => ["is incorrect"]}}, status: :unprocessable_entity
      else
          if @resource.update(scope_params)
            render json: serialized_resource
          else
            render json: error_response, status: :unprocessable_entity
          end
      end
    end

end