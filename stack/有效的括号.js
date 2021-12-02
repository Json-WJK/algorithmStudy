/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    //  如果是奇数直接return
    if (s.length % 2 === 1) return false

    // 创建一个栈 收集左括号
    const stack = []

    // 遍历字符串
    for (let i = 0; i < s.length; i++) {
        // 如果是左括号直接存入栈中
        const c = s[i]
        if (c === '(' || c === '{' || c === '[') {
            stack.push(c)
        } else { // 否则为右括号
            const t = stack[stack.length - 1]
            if (t === '(' && c === ')'
                ||
                t === '{' && c === '}'
                ||
                t === '[' && c === ']') { // 遇到的右括号必须与最后一个进入栈的左括号闭合
                stack.pop() // 取出已闭合的括号
            } else { // 没有遇到匹配的右括号
                return false
            }
        }
    }

    return !stack.length // 如果栈为空 那么说明栈内括号全部被匹配 return true
};

// 时间复杂度：O(n), n为字符串s的长度
// 空间复杂度：O(n), n为字符串s的长度

const res1 = isValid("()")
const res2 = isValid("()[]{}")
const res3 = isValid("(]")
const res4 = isValid("([)]")
const res5 = isValid("{[]}")