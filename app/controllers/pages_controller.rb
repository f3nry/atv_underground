class PagesController < ApplicationController
  def index

  end

  def app
    render 'app', :layout => false
  end
end
