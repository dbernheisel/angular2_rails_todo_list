System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Todo;
    return {
        setters:[],
        execute: function() {
            Todo = (function () {
                function Todo(task) {
                    this.editing = false;
                    this.task = task.trim();
                }
                Object.defineProperty(Todo.prototype, "task", {
                    get: function () {
                        return this._task;
                    },
                    set: function (value) {
                        this._task = value.trim();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Todo.prototype, "id", {
                    get: function () {
                        return this._id;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Todo.prototype, "created_at", {
                    get: function () {
                        return this._created_at;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Todo.prototype, "updated_at", {
                    get: function () {
                        return this._updated_at;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Todo.prototype, "completed", {
                    get: function () {
                        return this._completed;
                    },
                    set: function (value) {
                        this._completed = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Todo;
            }());
            exports_1("Todo", Todo);
        }
    }
});
//# sourceMappingURL=todo.js.map