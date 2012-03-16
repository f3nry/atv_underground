class AircraftsController < ApplicationController
  def index
    @aircrafts = Aircraft.includes(:model)

    respond_to do |format|
      format.html # index.html.erb
      format.json do
        render :json => @aircrafts
      end
    end
  end

  def show
    @aircraft = Aircraft.find params[:id]
  end

  def new
    @aircraft = Aircraft.new
  end

  def create
    @aircraft = Aircraft.new(params[:aircraft])
    @aircraft.organization_id = current_organization

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
