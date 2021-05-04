interface Item {
    name: string;
}

interface ProductsQueue<T>{
    push(item:T):void;
    getAll():T[]
}

class Queue<T extends Item> implements ProductsQueue<T> {
    private data: T[] = [];
    push(item: T) {
        this.data.push(item);
    }

    pop() {
        this.data.shift();
    }

    getAll(){
        return this.data;
    }
}

interface ProductItem {
    id: number;
    name: string;
}

const productItems = new Queue<ProductItem>();
productItems.push({ id: 123, name: "Oil" })