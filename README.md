# Ruby Spin-up
```bash
rails new .
rails g scaffold todo task:string completed:boolean
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
protect_from_forgery with: :null_session

# routes.rb
resources :todos, except: [:new, :edit]

# todos_controller.rb
render json: @todo
render json: @todos
render json: error messages
```

```bash
# create some seeds
rake db:seed
rails s
```

# Angular 2 Spin-up
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
// Like a Gemfile, this gives some dependencies
// In this case, we want the es6-shim, and a test library
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

```html
<!-- Setup our Angular2 view, and import all the Angular2 libraries -->
<!-- See here for the instruction -->
<!-- https://angular.io/docs/ts/latest/quickstart.html -->
<!doctype html>
<html lang="en" data-framework="angular2">
  <head>
    <title>TODO List - Angular 2 Front with Rails Back</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">

    <!-- 1. Load libraries -->
    <script src="node_modules/es6-shim/es6-shim.min.js"></script>
    <script src="node_modules/systemjs/dist/system-polyfills.js"></script>
    <script src="node_modules/angular2/es6/dev/src/testing/shims_for_IE.js"></script>

    <script src="node_modules/angular2/bundles/angular2-polyfills.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>
    <script src="node_modules/rxjs/bundles/Rx.js"></script>
    <script src="node_modules/angular2/bundles/angular2.dev.js"></script>

    <!-- 2. Configure SystemJS -->
    <script>
      System.config({
        packages: {
          app: {
            format: 'register',
            defaultExtension: 'js'
          }
        }
      });
      System.import('app/main')
            .then(null, console.error.bind(console));
    </script>
  </head>

  <!-- 3. Display the application -->
  <body>
    <todo-app>Loading...</todo-app>
  </body>
</html>
```


