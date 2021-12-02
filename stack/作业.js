// 1.请用 ES6 的 class，封装一个 Stack 类，包括 push、pop、peek 方法。
class Stack {
    constructor(arr) {
        this.arr = arr
    }
    push(item) {
        this.arr[this.arr.length] = item
        return this.arr
    }
    pop() {
        const newArr = []
        let lastItem = ''
        for (let i = 0; i < this.arr.length - 1; i++) {
            newArr.push(this.arr[i])
        }
        lastItem = this.arr[this.arr.length - 1]
        this.arr = newArr
        return lastItem
    }
    peek() {
        return this.arr[this.arr.length - 1]
    }
}

const myStack = new Stack([1])
console.log(myStack.push(2))
console.log(myStack.pop())
console.log(myStack.peek())
console.log(myStack.arr)


// 2、请用栈这个数据结构，将 100 这个十进制数字转为二进制。
const getFunc = () => {
    const stack = []
    const handle = (num) => {
        stack.push(num % 2)
        if (num < 2) return
        handle(Math.floor(num / 2))
    }
    handle(100)
    return stack.reverse().join('')
}
console.log(getFunc())