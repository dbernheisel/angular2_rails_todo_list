import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

import {Todo} from './todo';
import {TodoService} from './todo.service';

@Component({
  selector: 'todo',
  templateUrl: 'app/todo/todo.html'
})

export class TodoComponent {
  @Input() todo: Todo;
  errorMessage: string;
  newTodoText = '';

  constructor(
    private _todoService: TodoService,
    private _routeParams: RouteParams) { }

  ngOnOnit() {
    let id = +this._routeParams.get('id');
    this._todoService.getTodo(id).subscribe(
       todo => this.todo = todo,
       error => this.errorMessage = <any>error);
  }

  stopEditing(todo: Todo, editedTask: string) {
    todo.task = editedTask;
    todo.editing = false;
  }

  cancelEditingTodo(todo: Todo) {
    todo.editing = false;
  }

  updateEditingTodo(todo: Todo, editedTask: string) {
    editedTask = editedTask.trim();
    todo.editing = false;

    if (editedTask.length === 0) {
      return this._todoService.deleteTodo(todo);
    }

    this._todoService.updateTodo(todo);
    todo.task = editedTask;
  }

  editTodo(todo: Todo) {
    todo.editing = true;
  }

  toggleCompletion(todo: Todo) {
    this._todoService.toggleCompletion(todo);
  }

  remove(todo: Todo) {
    this._todoService.deleteTodo(todo);
  }

  addTodo() {
    if (this.newTodoText.trim().length) {
      this._todoService.createTodo(this.newTodoText);
      this.newTodoText = '';
    }
  }

  goBack() {
    window.history.back();
  }
}
