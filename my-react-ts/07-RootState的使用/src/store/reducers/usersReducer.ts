import { User } from '../../types'

// 定义用户基本属性
const initState = [
  {
    user_id: 1,
    user_name: '张三',
    user_age: 18,
  },
  {
    user_id: 2,
    user_name: '李四',
    user_age: 19,
  },
  {
    user_id: 3,
    user_name: '王五',
    user_age: 20,
  },
]
const usersReducer = (state: User[] = initState, action: unknown) => {
  return state
}
export default usersReducer
