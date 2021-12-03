// 队列数据结构 - 先进先出
// shift
// 应用场景：1、食堂打饭  2、JS异步中的任务队列  3、计算最近请求次数
const queue = []
queue.push(1)
queue.push(2)
const item1 = queue.shift()
const item2 = queue.shift()