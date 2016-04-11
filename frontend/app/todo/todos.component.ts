import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

import {Todo} from './todo';
import {TodoComponent} from './todo.component';
import {TodoService} from './todo.service';

@Component({
  selector: 'todos',
  templateUrl: 'app/todo/todos.html',
  directives: [TodoComponent]
})

export class TodosComponent implements OnInit {
  errorMessage: string;
  todos: Todo[];
  selectedTodo: Todo;

  constructor(
    private _router: Router,
    private _todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this._todoService.getTodos().subscribe(
       todos => this.todos = todos,
       error => this.errorMessage = <any>error);
  }

  onSelect(todo: Todo) { this.selectedTodo = todo; }

  gotoTodo() {
    this._router.navigate(['Todo', { id: this.selectedTodo.id }]);
  }
}