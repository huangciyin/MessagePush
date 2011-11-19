class PagesController < ApplicationController

  def index
    @userId = 0
    @userId = current_user.id if current_user
  end


end
