class PositionsController < ApplicationController
  def new
    @aircraft = Aircraft.find params[:aircraft_id]
    @position = @aircraft.positions.new
  end
  
  def create
    @position = Position.new params[:position]

    @position.aircraft_id = params[:aircraft_id]

    if @position.save
      redirect_to @position.aircraft
    else
    	@aircraft = @position.aircraft
    	render 'new'
    end
  end
  
  def edit
    @position = Position.find params[:id]
    @aircraft = @position.aircraft
    @action = "update"

    render 'new'
  end

  def update
    @position = Position.find params[:id]
    @position.update_attributes params[:position]
    
    @aircraft = @position.aircraft

    if @position.save
      redirect_to aircraft_path(@position.aircraft)
    else
      render 'new'
    end
  end
end
