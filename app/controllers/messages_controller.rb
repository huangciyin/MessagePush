class MessagesController < ApplicationController
  respond_to :html, :js

  def index
    @messages = Message.find(:all, :order => "created_at desc")
  end

  def create
    # Save in SQL
    @message = Message.new(params[:message])
    @message.save

    # Save in Redis
    #Message.save_redis(params[:message])

    respond_with @message, :location => messages_url
  end

end
