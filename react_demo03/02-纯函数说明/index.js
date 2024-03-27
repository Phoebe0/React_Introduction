/***
 * add函数是纯函数
 */
function add(a, b) {
  return a + b
}
add(1, 2) //3
add(1, 2) //3
add(1, 2) //3
add(1, 2) //3

/**
 * sub就是纯函数，因为几次调用输出可能不相等
 */
function sub(a, b) {
  return a - b - Math.random()
}
sub(2, 1)
sub(2, 1)
sub(2, 1)

//  ------- 一些数组方法 --------
// pop push slice splice
/**
 * push,pop,splice会对原数组进行修改，所以她们不是纯函数
 * slice不对原数组修改，相同输入的输出相同，所以是纯函数
 */
const arr = [0, 1, 2, 3]
arr.pop(1)
arr.slice(1, 2)
arr.splice(2)
arr.push(9)
console.log(arr)
