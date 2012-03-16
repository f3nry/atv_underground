offline = Rails::Offline.configure do
  public_path = Rails.public_path

  cache "assets/app.css"
  cache "assets/app.js"
  cache "/app"
  cache "/"

  network "/"
end
