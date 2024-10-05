type QNode<T> = {
    value: T;
    next?: QNode<T>;
}

// Queue follows the principle of FIFO, i.e First In First Out
class Queues<T> {
    public length: number;
    private head?: QNode<T>;
    private tail?: QNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    // To add anything to the queue
    enqueue(item: T): void {

        const node = { value: item } as QNode<T>;

        // Check if there is a tail
        if(!this.tail) {
            this.tail = this.head =  node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    // To remove from the queue
    dequeue(): T | undefined {
        // check if there is head?
        if(!this.head) {
            return undefined;
        }

        // Track of the length
        this.length--;

        const head = this.head;
        this.head = head.next;
        head.next = undefined;

        if(this.length === 0) {
            this.tail = undefined;
        }

        return head.value;
    }

    peek() {
        return this.head?.value;
    }
}

const queue = new Queues<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
console.log(queue.peek());



