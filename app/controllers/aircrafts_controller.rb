class AircraftsController < ApplicationController
  def index
    @aircrafts = Aircraft.all
  end

  def show
    @aircraft = Aircraft.find params[:id]
  end

  def new
    @aircraft = Aircraft.new
  end

  def create
    @aircraft = Aircraft.new(params[:aircraft])

    if @aircraft.save
      redirect_to @aircraft
    else
      render 'new'
    end
  end

  def edit
    @aircraft = Aircraft.find params[:id]
    @action = "update"

    render 'new'
  end

  def update
    @aircraft = Aircraft.find params[:id]
    @aircraft.update_attributes(params[:aircraft])

    if @aircraft.save
      redirect_to @aircraft 
    else
      render 'new'
    end

  end

  def destroy
    @aircraft = Aircraft.find params[:id]

    @aircraft.destroy

    redirect_to aircrafts_path
  end
end
