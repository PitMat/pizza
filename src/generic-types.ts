interface Item {
    name: string;
}

class Queue<T extends Item> {
    private data: T[] = [];
    push(item: T) {
        this.data.push(item);
    }

    pop() {
        this.data.shift();
    }
}

interface ProductItem {
    id: number;
    name: string;
}

const productItems = new Queue<ProductItem>();
productItems.push({ id: 123, name: "Oil" })