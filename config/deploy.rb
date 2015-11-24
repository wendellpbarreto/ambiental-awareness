require 'mina/bundler'
require 'mina/rails'
require 'mina/git'
require 'mina/rbenv'
require 'mina/unicorn'
require 'mina/rvm'

set :domain, '162.243.251.221'
set :deploy_to, '/home/root/application'
set :repository, 'git@github.com:wendellpbarreto/ambiental-awareness.git'
set :branch, 'digitalocean'
set :user, 'root'
set :forward_agent, true
set :port, '22'
set :unicorn_pid, "#{deploy_to}/shared/pids/application.pid"
set :shared_paths, ['pids', 'log', 'sockets']
set :rvm_path, "/usr/local/rvm/scripts/rvm"

task :environment do
  invoke :'rvm:use[2.2]'
end

task :setup => :environment do
  queue! %[mkdir -p "#{deploy_to}/shared/log"]
  queue! %[chmod g+rx,u+rwx "#{deploy_to}/shared/log"]

  queue! %[mkdir -p "#{deploy_to}/shared/sockets/"]
  queue! %[chmod g+rx,u+rwx "#{deploy_to}/shared/sockets"]

  queue! %[mkdir -p "#{deploy_to}/shared/pids/"]
  queue! %[chmod g+rx,u+rwx "#{deploy_to}/shared/pids"]
end

task :bower_install do
  queue "cd #{deploy_to}/current ; bower install"
end

task :precompile_assets do
  queue "cd #{deploy_to}/current ; rake assets:precompile RAILS_ENV=production"
end

desc "Deploys the current version to the server."
task :deploy => :environment do
  deploy do
    invoke :'git:clone'
    invoke :'deploy:link_shared_paths'
    invoke :'bundle:install'
    invoke :'rails:db_migrate'
    invoke :'deploy:cleanup'
    to :launch do
      # invoke :'bower_install'
      # invoke :'precompile_assets'
      invoke :'unicorn:restart'
    end
  end
end

