import { Pizza } from './pizza.model';
import {Pizzeria} from './pizzeria';

interface CancelablePizza{
    cancelable:boolean;
}

export class PolishPizzeria extends Pizzeria{
    constructor(name:string ,public openAtNight:boolean){
        super(name)
    } 
        

    order(pizza:Pizza & CancelablePizza):void {
        this.pizzasInOrder.push(pizza)
    }


    
     bake(){
        return "pizza is being baked"
    }
};