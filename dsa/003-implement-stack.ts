// Write a program to implment Stack Data Structure in TypeScript.
// Stack is last in first out (LIFO) data structure.

type SNode<T> = {
    value: T;
    prev?: SNode<T>;
}

class Stack<T> {

    public length: number;
    private head?: SNode<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    //Push items to the Stack
    push(value: T): void {
        const node = { value } as SNode<T>;
        
        this.length++;
        if(!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;

    }

    // Pop items from the stack
    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if(this.length === 0) {
            const head = this.head;
            this.head = undefined;
            return head?.value;
        }

        const head = this.head as SNode<T>;
        this.head = head.prev;
        return head.value;
    }
    
    // Check the item on the top of the stack
    peek(): T | undefined {
        return this.head?.value;
    }
}

const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();

console.log(stack.peek()); // 2