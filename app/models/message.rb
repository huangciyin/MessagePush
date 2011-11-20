class Message < ActiveRecord::Base
	attr_accessible :title, :content, :user_id

	belongs_to :user

  def self.save_redis(params)
    $redis.sadd('message', params[:title])
  end


end
