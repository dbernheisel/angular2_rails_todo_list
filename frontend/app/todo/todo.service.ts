import {Todo}       from './todo';
import {Http,
        Response,
        Headers,
        RequestOptions} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class TodoService {

  constructor(private http: Http) { }

  private _todoUrl = 'http://localhost:3000/api';

  getTodos() {
    return this.http.get(`${this._todoUrl}/todos.json`)
      .map(res => <Todo[]>res.json())
      .catch(this.handleError);
  }

  getTodo(id: number) {
    return this.http.get(`${this._todoUrl}/todos/${id}.json`)
      .map(res => <Todo>res.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  createTodo(task: string) {
    let body = JSON.stringify({ todo: { task: task } });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this._todoUrl}/todos.json`, body, options)
      .map(res => <Todo>res.json())
      .catch(this.handleError)
  }

  updateTodo(todo:Todo) {
    let body = JSON.stringify({ todo: todo });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(`${this._todoUrl}/todos/${todo.id}.json`, body, options)
      .map(response => <Todo>response.json())
      .catch(this.handleError);
  }

  deleteTodo(todo: Todo) {
    return this.http.delete(`${this._todoUrl}/todos/${todo.id}.json`)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().meta.errors || 'Server Error');
  }
}
