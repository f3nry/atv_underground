class CgEntriesController < ApplicationController
  # GET /cg_entries
  # GET /cg_entries.json
  def index
    @cg_entries = CgEntry.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @cg_entries }
    end
  end

  # GET /cg_entries/1
  # GET /cg_entries/1.json
  def show
    @cg_entry = CgEntry.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @cg_entry }
    end
  end

  # GET /cg_entries/new
  # GET /cg_entries/new.json
  def new
    @cg_entry = CgEntry.new
    @aircraft = Aircraft.find(params[:aircraft_id])

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @cg_entry }
    end
  end

  # GET /cg_entries/1/edit
  def edit
    @cg_entry = CgEntry.find(params[:id])
    @aircraft = @cg_entry.aircraft
    @action = "update"
  end

  # POST /cg_entries
  # POST /cg_entries.json
  def create
    @cg_entry = CgEntry.new(params[:cg_entry])
    @aircraft = Aircraft.find(params[:aircraft_id])

    @cg_entry.aircraft_id = @aircraft

    respond_to do |format|
      if @cg_entry.save
        format.html { redirect_to @aircraft, notice: 'Cg entry was successfully created.' }
        format.json { render json: @cg_entry, status: :created, location: @cg_entry }
      else
        format.html { render action: "new" }
        format.json { render json: @cg_entry.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /cg_entries/1
  # PUT /cg_entries/1.json
  def update
    @cg_entry = CgEntry.find(params[:id])

    respond_to do |format|
      if @cg_entry.update_attributes(params[:cg_entry])
        format.html { redirect_to @aircraft, notice: 'Cg entry was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @cg_entry.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /cg_entries/1
  # DELETE /cg_entries/1.json
  def destroy
    @cg_entry = CgEntry.find(params[:id])
    @cg_entry.destroy

    respond_to do |format|
      format.html { redirect_to cg_entries_url }
      format.json { head :no_content }
    end
  end
end
