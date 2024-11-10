import { Todo } from '../../types'

const initState = [
  {
    id: 1,
    text: '吃饭',
    completed: false,
  },
  {
    id: 2,
    text: '睡觉',
    completed: false,
  },
  {
    id: 3,
    text: '学习',
    completed: false,
  },
]
const todosReducer = (state: Todo[]  = initState, action: unknown)=> {
  return state
}
export default todosReducer
