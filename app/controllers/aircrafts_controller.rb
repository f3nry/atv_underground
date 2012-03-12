class AircraftsController < ApplicationController
  def index
    @aircrafts = Aircraft.all
  end

  def show

  end

  def new
    @aircraft = Aircraft.new
  end

  def create
    @aircraft = Aircraft.new(params[:aircraft])

    if @aircraft.save
      redirect_to aircrafts_path
    else
      render 'new'
    end
  end
end
