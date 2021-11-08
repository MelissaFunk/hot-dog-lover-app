class HotDogsController < ApplicationController

  def show
    hot_dog = HotDog.find(params[:id])
    render json: hot_dog, status: :ok
  end

  def create
    hot_dog = HotDog.create(hot_dog_params)
    render json: hot_dog, status: :created
  end

  private

  def hot_dog_params
    params.permit(:name, :dog_style, :image, :toppings, :condiments, :restaurant_id, :user_id)
  end
end
