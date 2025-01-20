class Stack<T>{
    private stack: T[] = []

    constructor(){
        this.stack = []
    }

    push(item: T): void{
        this.stack.push(item)
    }

    poll():T{
        return this.stack.pop()!
    }

    isEmpty(): boolean{
        return this.stack.length === 0
    }

    display(): void{
        console.log(this.stack)
    }
}

const st = new Stack<number>()

st.push(1)
st.push(2)
st.push(3)
st.push(4)
st.push(5)

st.display()

st.poll()
st.poll()

st.display()

console.log(st.isEmpty())