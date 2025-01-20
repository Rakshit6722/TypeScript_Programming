"use strict";
class Stack {
    constructor() {
        this.stack = [];
        this.stack = [];
    }
    push(item) {
        this.stack.push(item);
    }
    poll() {
        return this.stack.pop();
    }
    isEmpty() {
        return this.stack.length === 0;
    }
    display() {
        console.log(this.stack);
    }
}
const st = new Stack();
st.push(1);
st.push(2);
st.push(3);
st.push(4);
st.push(5);
st.display();
st.poll();
st.poll();
st.display();
console.log(st.isEmpty());
