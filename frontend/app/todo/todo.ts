export class Todo {
  editing: Boolean;

  private _task: String;
  private _completed: Boolean;
  private _id: Number;

  get task() {
    return this._task;
  }

  set task(value: String) {
    this._task = value.trim();
  }

  get id() {
    return this._id;
  }

  get completed() {
    return this._completed;
  }

  set completed(value: Boolean) {
    this._completed = value;
  }

  constructor(task: String) {
    this.completed = false;
    this.editing = false;
    this.task = task.trim();
  }
}