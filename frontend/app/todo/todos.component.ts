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
  newTodoText = '';

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

  editTodo(todo: Todo) {
    todo.editing = true;
  }

  toggleCompletion(todo: Todo) {
    todo.completed = !todo.completed;
    this.updateTodo(todo);
  }

  updateEditingTodo(todo: Todo, editedTask: string) {
    editedTask = editedTask.trim();
    todo.editing = false;

    if (editedTask.length === 0) {
      return this.deleteTodo(todo);
    }
    if (editedTask !== todo.task.trim()){
      todo.task = editedTask;
      this.updateTodo(todo)
    }
  }

  deleteTodo(todo: Todo) {
    this._todoService.deleteTodo(todo).subscribe(
      message => this.todos.splice(this.todos.indexOf(todo), 1),
      error => this.errorMessage = <any>error);
  }

  updateTodo(todo: Todo) {
    this._todoService.updateTodo(todo).subscribe(
      updated_todo => todo = updated_todo,
      error => this.errorMessage = <any>error);
  }

  cancelEditingTodo(todo: Todo) {
    todo.editing = false;
  }

  stopEditing(todo: Todo, editedTask: string) {
    todo.task = editedTask;
    todo.editing = false;
  }

  addTodo() {
    if (this.newTodoText.trim().length) {
      this._todoService.createTodo(this.newTodoText).subscribe(
        new_todo => this.todos.push(new_todo),
        error => this.errorMessage = <any>error);
      this.newTodoText = '';
    }
  }

}
