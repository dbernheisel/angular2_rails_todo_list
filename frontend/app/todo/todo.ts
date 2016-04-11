export class Todo {
  editing: Boolean;

  private _task: String;
  private _completed: Boolean;
  private _id: Number;
  private _created_at: String;
  private _updated_at: String;

  get task() {
    return this._task;
  }

  set task(value: String) {
    this._task = value.trim();
  }

  get id() {
    return this._id;
  }

  get created_at() {
    return this._created_at;
  }

  get updated_at() {
    return this._updated_at;
  }

  get completed() {
    return this._completed;
  }

  set completed(value: Boolean) {
    this._completed = value;
  }

  constructor(task: String) {
    this.editing = false;
    this.task = task.trim();
  }
}
