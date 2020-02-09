class UsersController < ApplicationController

  def edit
  end

  def update
    user = User.find(params[:id])
    user.update
  end
end
