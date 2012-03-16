class Admin::OrganizationsController < AdminController
  def index
    @organizations = Organization.all
  end

  def new
    @organization = Organization.new
  end
  
  def create
    @organization = Organization.new(params[:organization])

    if @organization.save
      redirect_to admin_organizations_path
    else
      render 'new'
    end
  end

  def use
    @organization = Organization.find params[:id]

    session[:organization_id] = @organization.id

    redirect_to admin_organizations_path
  end
end
