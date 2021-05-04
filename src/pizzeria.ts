import { Orderable } from "./orderable";
import { Pizza, Status, SizeKey, Payamentmethod } from "./pizza.model";



export abstract class Pizzeria implements Orderable {

    static id: number = 0;
    id: number;
    name: string;
    pizzasInOrder: Pizza[] = [];
    private maxPizzasInOven: number = 10;
    protected recipes: string[] = [];
    private _manager: string = "Jan Kowalski";

    constructor(name: string) {
        this.id = Pizzeria.id++;
        this.name = name;
    }

    get manager(): string {
        return this._manager
    }

    set manager(manager) {
        this._manager = manager
    }

    getPayamentMethod(payament: Payamentmethod){
        switch(payament.type){
            case "cash": return `Paid in cash in ${payament.currency}`
            case "debit card": return `Paid with debit card ${payament.code}`
            case "online payament": return `Paid in online payaments ${payament.bankAccount}`
        }
    }

    order(pizza: Pizza): void {
        this.pizzasInOrder.push(pizza)
    }

    changeStatus(index: number, status: Status) {
        this.pizzasInOrder[index].status = status;
    }

    changeSize(index: number, size: SizeKey) {
        this.pizzasInOrder[index].size = size;
    }

    checkPrice({ price }: Pizza) {
        if (typeof price === "string") {
            console.log("price is string", price.toLowerCase());
        } else if (typeof price === "number") {
            console.log("price is number", price.toFixed());
        }
    }

    isOvenFull(): boolean {
        return this.pizzasInOrder.length > this.maxPizzasInOven;
    }

    abstract bake(): void;
}




