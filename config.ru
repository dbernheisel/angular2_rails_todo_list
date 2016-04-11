# This file is used by Rack-based servers to start the application.

require ::File.expand_path('../config/environment', __FILE__)

use Rack::Cors do
  allow do
    origins 'localhost:3000', '127.0.0.1:3000',
            'localhost:3001', '127.0.0.1:3001'
  end

  allow do
    origins '*'
    resource '/public/*', :headers => :any, :methods => :get
  end
end

# Action Cable requires that all classes are loaded in advance
Rails.application.eager_load!

run Rails.application

