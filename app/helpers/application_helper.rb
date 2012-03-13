module ApplicationHelper
  def icon(icon_name, color = "white")
    "<i class=\"icon-#{icon_name} icon-#{color}\"></i>"
  end
end
