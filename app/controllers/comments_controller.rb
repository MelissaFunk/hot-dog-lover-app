class CommentsController < ApplicationController
  skip_before_action :authorized
  
  def create
    comment = Comment.create(comment_params)
    render json: comment, status: :created
  end

  private

  def comment_params
    params.permit(:comment, :user_id, :restaurant_id)
  end
end
