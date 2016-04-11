System.register(['angular2/core', 'angular2/router', './todo', './todo.service'], function(exports_1, context_1) {
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
    var core_1, router_1, todo_1, todo_service_1;
    var TodoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (todo_1_1) {
                todo_1 = todo_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            }],
        execute: function() {
            TodoComponent = (function () {
                function TodoComponent(_todoService, _routeParams) {
                    this._todoService = _todoService;
                    this._routeParams = _routeParams;
                    this.newTodoText = '';
                }
                TodoComponent.prototype.ngOnOnit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._todoService.getTodo(id).subscribe(function (todo) { return _this.todo = todo; }, function (error) { return _this.errorMessage = error; });
                };
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
                    this._todoService.updateTodo(todo);
                    todo.task = editedTask;
                };
                TodoComponent.prototype.editTodo = function (todo) {
                    todo.editing = true;
                };
                TodoComponent.prototype.toggleCompletion = function (todo) {
                    this._todoService.toggleCompletion(todo);
                };
                TodoComponent.prototype.remove = function (todo) {
                    this._todoService.deleteTodo(todo);
                };
                TodoComponent.prototype.addTodo = function () {
                    if (this.newTodoText.trim().length) {
                        this._todoService.createTodo(this.newTodoText);
                        this.newTodoText = '';
                    }
                };
                TodoComponent.prototype.goBack = function () {
                    window.history.back();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', todo_1.Todo)
                ], TodoComponent.prototype, "todo", void 0);
                TodoComponent = __decorate([
                    core_1.Component({
                        selector: 'todo',
                        templateUrl: 'app/todo/todo.html'
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService, router_1.RouteParams])
                ], TodoComponent);
                return TodoComponent;
            }());
            exports_1("TodoComponent", TodoComponent);
        }
    }
});
//# sourceMappingURL=todo.component.js.map