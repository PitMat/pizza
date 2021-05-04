"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var polish_pizzeria_1 = require("./polish-pizzeria");
var american_pizzeria_1 = require("./american-pizzeria");
var pizza_model_1 = require("./pizza.model");
var laStrada = new polish_pizzeria_1.PolishPizzeria('La Strada', true);
var americanHouse = new american_pizzeria_1.AmericanPizzeria('American House');
var venezia = new polish_pizzeria_1.PolishPizzeria('Venezia', true);
var isOvenInVeneziaFull = venezia.isOvenFull();
var capriciosa = {
    name: "Capriciosa",
    price: 20.99,
    size: 'large',
    status: pizza_model_1.Status.Ordered
};
venezia.order(capriciosa);
venezia.changeStatus(0, pizza_model_1.Status.Baked);
console.log(laStrada, americanHouse, venezia);
