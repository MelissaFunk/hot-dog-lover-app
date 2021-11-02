class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_response
  rescue_from ActiveRecord::RecordNotFound, with: :user_not_found_response
  skip_before_action :authorized, only: [:create, :favorites]

  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end

  def show
    current_user = User.find(session[:user_id])
    render json: current_user, status: :ok
  end

  def favorites
    favorite = Review.where(["user_id = ? and favorite =?", params[:id], true])
    render json: favorite, status: :ok
  end

  private
  
  def user_params
    params.permit(:username, :password_digest)
  end

  def render_unprocessable_response(invalid)
    render json: {error: invalid.record.errors}, status: :unprocessable_entity
  end

  def user_not_found_response
    render json: { error: "User not found" }, status: :not_found
  end
end
