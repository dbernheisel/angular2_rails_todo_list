import { Component }        from 'angular2/core';
import { RouteConfig,
         ROUTER_DIRECTIVES,
         ROUTER_PROVIDERS } from 'angular2/router';
import { Http, Response }   from 'angular2/http';

import { TodoService }      from './todo/todo.service';
import { TodoComponent }    from './todo/todo.component';
import { TodosComponent }   from './todo/todos.component';

@Component({
    selector: 'todo-app',
    templateUrl: 'app/layout.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, TodoService]
})

@RouteConfig([
  {
    path: '/todos',
    name: 'Todos',
    component: TodosComponent,
    useAsDefault: true
  },
  {
    path: '/todos/:id',
    name: 'Todo',
    component: TodoComponent
  }
])

export class AppComponent { }
