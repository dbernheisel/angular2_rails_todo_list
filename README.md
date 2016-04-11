# Angular 2 frontend with Rails backend

## Requirements
1. Node `brew install node`
2. NPM `npm install npm -g`
3. rbenv `brew install rbenv ruby-build`
4. ruby 2.3.0 installed `rbenv install 2.3.0`
5. Bundler gem installed `gem install bundler`

## Get running
```bash
git clone https://github.com/dbernheisel/angular2_rails_todo_list.git
cd angular2_rails_todo_list
bundle install
rake db:create
rake db:migrate
rake db:seed
rails s
# open a new terminal window or tab
cd frontend
npm install
npm start
```

### Changes from rails init
```bash
rails new .
rails g scaffold todo task:string completed:boolean
mkdir controllers/api
mv app/controllers/todos_controller.rb app/controllers/api/todos_controller.rb
mkdir helpers/api
mv app/helpers/todos_helper.rb app/helpers/api/todos_helper.rb
```

```ruby
# create_todos.rb migration file
# Add default: false
t.boolean :completed, default: false
```

```bash
rake db:migrate
```

```ruby
# application_controller.rb
# we're going to do an API-only approach.
# I purposely avoided API-mode for Rails 5 for now.
protect_from_forgery with: :null_session

# todos_controller.rb
# wrap entire controller in Api module.
module Api
  ...
end

# todos_helper.rb
# wrap entire helper in Api module.
module Api
  ...
end

# routes.rb
namespace :api do
  resources :todos, except: [:new, :edit]
end

# todos_controller.rb
# render json in appropriate places.
render json: @todo
render json: @todos
render json: error messages
```

```bash
# create some seeds
rake db:seed
rails s
```

### Angular 2 spin-up
```json
// package.json
// Tells NPM what to install, where things are, and how/what to run
{
  "name": "angular2-rails-todo",
  "version": "1.0.0",
  "scripts": {
    "start": "concurrently \"npm run tsc:w\" \"npm run lite\" ",
    "tsc": "tsc",
    "tsc:w": "tsc -w",
    "lite": "lite-server",
    "typings": "typings",
    "postinstall": "typings install"
  },
  "license": "ISC",
  "dependencies": {
    "angular2": "2.0.0-beta.13",
    "systemjs": "0.19.25",
    "es6-shim": "^0.35.0",
    "reflect-metadata": "0.1.2",
    "rxjs": "5.0.0-beta.2",
    "zone.js": "0.6.6"
  },
  "devDependencies": {
    "concurrently": "^2.0.0",
    "lite-server": "^2.1.0",
    "typescript": "^1.8.9",
    "typings":"^0.7.11"
  }
}
```

```json
// tsconfig.json
// Tells TypeScript how to compile.
{
  "compilerOptions": {
    "target": "es5",
    "module": "system",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false
  },
  "exclude": [
    "node_modules",
    "typings/main",
    "typings/main.d.ts"
  ]
}
```

```json
// typings.json
// Like a Gemfile for Ruby but for TypeScript
// Like a Package.json for Node but for TypeScript
{
  "ambientDependencies": {
    "es6-shim": "github:DefinitelyTyped/DefinitelyTyped/es6-shim/es6-shim.d.ts#7de6c3dd94feaeb21f20054b9f30d5dabc5efabd",
    "jasmine": "github:DefinitelyTyped/DefinitelyTyped/jasmine/jasmine.d.ts#7de6c3dd94feaeb21f20054b9f30d5dabc5efabd"
  }
}
```

```json
// bs-config.json
// Configuration file for BrowserSync, so it doesn't conflict with the rails server
{
  "port": 3001
}
```

```bash
npm install
```

Later I added Semantic UI via `npm install semantic --save`
```bash
cd frontend/semantic
gulp build 
```


