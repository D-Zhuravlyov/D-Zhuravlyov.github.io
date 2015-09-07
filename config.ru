require 'rubygems'  
require 'sinatra'  
require 'rack/recaptcha'

use Rack::Recaptcha, :public_key => '6LcCOgsTAAAAAMCYhRYvc750N8F8vexuMOau4btj', :private_key => '6LcCOgsTAAAAABCbdq8nbG3vFY2ArX5cclVbRfmO'  
helpers Rack::Recaptcha::Helpers  
enable :sessions

require './application'  
run Sinatra::Application