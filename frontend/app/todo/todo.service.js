System.register(['angular2/http', 'angular2/core', 'rxjs/Observable', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var http_1, core_1, Observable_1;
    var TodoService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            TodoService = (function () {
                function TodoService(http) {
                    this.http = http;
                    this._todoUrl = 'http://localhost:3000';
                }
                TodoService.prototype.getTodos = function () {
                    return this.http.get(this._todoUrl + "/todos.json")
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                TodoService.prototype.getTodo = function (id) {
                    return this.http.get(this._todoUrl + "/todos/" + id + ".json")
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                TodoService.prototype.createTodo = function (task) {
                    var body = JSON.stringify({ todo: { task: task } });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this._todoUrl + "/todos.json", body, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                TodoService.prototype.updateTodo = function (todo) {
                    var body = JSON.stringify({ todo: { task: todo.task, completed: todo.completed } });
                    return this.http.put(this._todoUrl + "/todos/" + todo.id + ".json", body);
                };
                TodoService.prototype.deleteTodo = function (todo) {
                    return this.http.delete(this._todoUrl + "/todos/" + todo.id + ".json");
                };
                TodoService.prototype.handleError = function (error) {
                    console.log(error);
                    return Observable_1.Observable.throw(error.json().meta.errors || 'Server Error');
                };
                TodoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TodoService);
                return TodoService;
            }());
            exports_1("TodoService", TodoService);
        }
    }
});
//# sourceMappingURL=todo.service.js.map