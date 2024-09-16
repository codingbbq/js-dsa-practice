class Queue<T> {

    private _items: T[];
    private _count: number;
    private _front: number; 

    constructor() {
        this._items = [];
        this._count = 0;
        this._front = 0;
    }

    enqueue(value: T): void {
        this._items[this._count] = value;
        this._count++;
    }
    
    dequeue(): T | undefined {
        // Check if the queue is empty
        if(this.isEmpty()) {
            return undefined;
        }

        const item = this._items[this._front];
        
        for(let i = this._front; i < this._count - 1; i++) {
            this._items[i] = this._items[i + 1];
        }

        this._count--;
        this._items.length = this._count;
        return item;

    }

    peek() : T | string {
        if(this.isEmpty()) {
            return "No items in the queue";
        }
        return this._items[this._front];
    }

    size(): number {
        return this._count - this._front;
    }

    isEmpty(): boolean {
        return this._count === 0;
    }
}

const q = new Queue<number>();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

q.dequeue();
q.dequeue();
q.dequeue();

console.log('First item', q.peek());
console.log('Queue length', q.size());
