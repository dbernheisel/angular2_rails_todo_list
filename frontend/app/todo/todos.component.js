System.register(['angular2/core', 'angular2/router', './todo.component', './todo.service'], function(exports_1, context_1) {
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
    var core_1, router_1, todo_component_1, todo_service_1;
    var TodosComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (todo_component_1_1) {
                todo_component_1 = todo_component_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            }],
        execute: function() {
            TodosComponent = (function () {
                function TodosComponent(_router, _todoService) {
                    this._router = _router;
                    this._todoService = _todoService;
                    this.newTodoText = '';
                }
                TodosComponent.prototype.ngOnInit = function () {
                    this.getTodos();
                };
                TodosComponent.prototype.getTodos = function () {
                    var _this = this;
                    this._todoService.getTodos().subscribe(function (todos) { return _this.todos = todos; }, function (error) { return _this.errorMessage = error; });
                };
                TodosComponent.prototype.editTodo = function (todo) {
                    todo.editing = true;
                };
                TodosComponent.prototype.toggleCompletion = function (todo) {
                    todo.completed = !todo.completed;
                    this.updateTodo(todo);
                };
                TodosComponent.prototype.updateEditingTodo = function (todo, editedTask) {
                    editedTask = editedTask.trim();
                    todo.editing = false;
                    if (editedTask.length === 0) {
                        return this.deleteTodo(todo);
                    }
                    if (editedTask !== todo.task.trim()) {
                        todo.task = editedTask;
                        this.updateTodo(todo);
                    }
                };
                TodosComponent.prototype.deleteTodo = function (todo) {
                    var _this = this;
                    this._todoService.deleteTodo(todo).subscribe(function (message) { return _this.todos.splice(_this.todos.indexOf(todo), 1); }, function (error) { return _this.errorMessage = error; });
                };
                TodosComponent.prototype.updateTodo = function (todo) {
                    var _this = this;
                    this._todoService.updateTodo(todo).subscribe(function (updated_todo) { return todo = updated_todo; }, function (error) { return _this.errorMessage = error; });
                };
                TodosComponent.prototype.cancelEditingTodo = function (todo) {
                    todo.editing = false;
                };
                TodosComponent.prototype.stopEditing = function (todo, editedTitle) {
                    todo.task = editedTitle;
                    todo.editing = false;
                };
                TodosComponent.prototype.addTodo = function () {
                    var _this = this;
                    if (this.newTodoText.trim().length) {
                        this._todoService.createTodo(this.newTodoText).subscribe(function (new_todo) { return _this.todos.push(new_todo); }, function (error) { return _this.errorMessage = error; });
                        this.newTodoText = '';
                    }
                };
                TodosComponent = __decorate([
                    core_1.Component({
                        selector: 'todos',
                        templateUrl: 'app/todo/todos.html',
                        directives: [todo_component_1.TodoComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, todo_service_1.TodoService])
                ], TodosComponent);
                return TodosComponent;
            }());
            exports_1("TodosComponent", TodosComponent);
        }
    }
});
//# sourceMappingURL=todos.component.js.map