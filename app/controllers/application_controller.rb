class ApplicationController < ActionController::Base
  protect_from_forgery

  def current_organization
    session[:organization_id] || current_user.organization_id
  end
end
