class AdminController < ApplicationController
  before_filter :authenticate_admin

  def authenticate_admin
    redirect_to new_user_session_path unless current_user.is_admin
  end
end
