# This file is used by Rack-based servers to start the application.

require ::File.expand_path('../config/environment', __FILE__)
require "rack-timeout"

run Rails.application

use Rack::Timeout          # Call as early as possible so rack-timeout runs before all other middleware.
Rack::Timeout.timeout = 5  # Recommended. If omitted, defaults to 15 seconds.