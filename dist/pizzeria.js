"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizzeria = void 0;
var Pizzeria = /** @class */ (function () {
    function Pizzeria(name) {
        this.pizzasInOrder = [];
        this.maxPizzasInOven = 10;
        this.recipes = [];
        this._manager = "Jan Kowalski";
        this.id = Pizzeria.id++;
        this.name = name;
    }
    Object.defineProperty(Pizzeria.prototype, "manager", {
        get: function () {
            return this._manager;
        },
        set: function (manager) {
            this._manager = manager;
        },
        enumerable: false,
        configurable: true
    });
    Pizzeria.prototype.order = function (pizza) {
        this.pizzasInOrder.push(pizza);
    };
    Pizzeria.prototype.changeStatus = function (index, status) {
        this.pizzasInOrder[index].status = status;
    };
    Pizzeria.prototype.isOvenFull = function () {
        return this.pizzasInOrder.length > this.maxPizzasInOven;
    };
    Pizzeria.id = 0;
    return Pizzeria;
}());
exports.Pizzeria = Pizzeria;
