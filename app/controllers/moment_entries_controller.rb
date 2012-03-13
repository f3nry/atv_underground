class MomentEntriesController < ApplicationController
  # GET /moment_entries
  # GET /moment_entries.json
  def index
    @moment_entries = MomentEntry.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @moment_entries }
    end
  end

  # GET /moment_entries/1
  # GET /moment_entries/1.json
  def show
    @moment_entry = MomentEntry.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @moment_entry }
    end
  end

  # GET /moment_entries/new
  # GET /moment_entries/new.json
  def new
    @moment_entry = MomentEntry.new
    @aircraft = Aircraft.find params[:aircraft_id]

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @moment_entry }
    end
  end

  # GET /moment_entries/1/edit
  def edit
    @moment_entry = MomentEntry.find(params[:id])
    @aircraft = @moment_entry.aircraft

    @action = "update"
  end

  # POST /moment_entries
  # POST /moment_entries.json
  def create
    @moment_entry = MomentEntry.new(params[:moment_entry])
    @aircraft = Aircraft.find params[:aircraft_id]

    @moment_entry.aircraft_id = @aircraft.id

    respond_to do |format|
      if @moment_entry.save
        format.html { redirect_to @aircraft, notice: 'Moment entry was successfully created.' }
        format.json { render json: @moment_entry, status: :created, location: @moment_entry }
      else
        format.html { render action: "new" }
        format.json { render json: @moment_entry.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /moment_entries/1
  # PUT /moment_entries/1.json
  def update
    @moment_entry = MomentEntry.find(params[:id])

    respond_to do |format|
      if @moment_entry.update_attributes(params[:moment_entry])
        format.html { redirect_to @moment_entry.aircraft, notice: 'Moment entry was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @moment_entry.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /moment_entries/1
  # DELETE /moment_entries/1.json
  def destroy
    @moment_entry = MomentEntry.find(params[:id])
    @moment_entry.destroy

    respond_to do |format|
      format.html { redirect_to @moment_entry.aircraft }
      format.json { head :no_content }
    end
  end
end
