// Write a program to implement an Array in TypeScript
// The array should have the following methods:
// 1. push
// 2. pop
// 3. get
// 4. delete
// 5. insert
// 6. size

class CustomArray {
    private arr: number[] = [];

    push(value: number): void {
        this.arr.push(value);
    }

    pop(): void {
        this.arr.pop();
    }

    get(index: number): number {
        return this.arr[index];
    }

    delete(index: number): void {
        this.arr.splice(index, 1);
    }

    insert(index: number, number: number): void {
        this.arr.splice(index, 0, number);
    }

    size(): number {
        return this.arr.length;
    }

    print(): void {
        console.log(this.arr);
    }
}

const arr = new CustomArray();
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);    

arr.size(); // 4
arr.get(2); // 3
arr.delete(2);
arr.print();

arr.pop();
arr.print();

arr.insert(1, 5);
arr.print();

// From the above program, we can learn about the implementation of an array in TypeScript.
/*
1) How to create a class in JavaScript
2) How to create a method in a class
3) How to access the class method
4) How to access the class property
5) How to access the class property using the this keyword
*/