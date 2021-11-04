class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_response
  rescue_from ActiveRecord::RecordNotFound, with: :user_not_found_response
  skip_before_action :authorized, only: [:index, :create, :favorites]

  def index
    render json: User.all, status: :ok
  end

  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end

  def show
    current_user = User.find(session[:user_id])
    if current_user
      render json: current_user, status: :ok
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end
  
  def update
    user = User.find(params[:id])
    user.update(params.require(:user).permit(:id, :name))
    render json: user, status: :accepted
  end

  def favorites
    favorite = Review.where(["user_id = ? and favorite = ?", params[:id], true])
    render json: favorite, status: :ok
  end

  private
  
  def user_params
    params.permit(:name, :username, :password)
  end

  def render_unprocessable_response(invalid)
    render json: { errors: current_user.errors.full_messages }, status: :unprocessable_entity
  end

  def user_not_found_response
    render json: { error: "User not found" }, status: :not_found
  end
end
