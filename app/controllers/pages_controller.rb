class PagesController < ApplicationController
  def index

  end

  def app
    render 'app', :layout => false
  end

  def manifest
    headers["Content-Type"] = "text/cache-manifest"

    render :layout => false
  end
end
