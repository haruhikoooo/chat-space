class MessageController < ApplicationController
  def index
    @message = Message.new
  end

  def create
    Message.create(message_params)
    redirect_to group_message_index_path(message.group_id)
  end

  private
  def message_params
    params.require(:message).permit(:chat, :image).merge(user_id: current_user.id, group_id: params[:group_id])
  end
end
