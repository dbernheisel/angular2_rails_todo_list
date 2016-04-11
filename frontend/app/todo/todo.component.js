System.register(['angular2/core', './todo.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_service_1;
    var TodoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            }],
        execute: function() {
            TodoComponent = (function () {
                function TodoComponent(_todoService) {
                    this._todoService = _todoService;
                    // todoStore: TodoStore;
                    this.newTodoText = '';
                }
                TodoComponent.prototype.stopEditing = function (todo, editedTask) {
                    todo.task = editedTask;
                    todo.editing = false;
                };
                TodoComponent.prototype.cancelEditingTodo = function (todo) {
                    todo.editing = false;
                };
                TodoComponent.prototype.updateEditingTodo = function (todo, editedTask) {
                    editedTask = editedTask.trim();
                    todo.editing = false;
                    if (editedTask.length === 0) {
                        return this._todoService.deleteTodo(todo);
                    }
                    todo.task = editedTask;
                };
                TodoComponent.prototype.editTodo = function (todo) {
                    todo.editing = true;
                };
                TodoComponent.prototype.removeCompleted = function () {
                    this._todoService.removeCompleted();
                };
                TodoComponent.prototype.toggleCompletion = function (todo) {
                    this._todoService.toggleCompletion(todo);
                };
                TodoComponent.prototype.remove = function (todo) {
                    this._todoService.remove(todo);
                };
                TodoComponent.prototype.addTodo = function () {
                    if (this.newTodoText.trim().length) {
                        this._todoService.add(this.newTodoText);
                        this.newTodoText = '';
                    }
                };
                TodoComponent.prototype.goBack = function () {
                    window.history.back();
                };
                TodoComponent = __decorate([
                    core_1.Component({
                        selector: 'todo',
                        templateUrl: 'app/todo/todo.html'
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], TodoComponent);
                return TodoComponent;
            }());
            exports_1("TodoComponent", TodoComponent);
        }
    }
});
//# sourceMappingURL=todo.component.js.map