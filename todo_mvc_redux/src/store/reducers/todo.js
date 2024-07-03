import { CHANGE_STATE } from '../constants/todo'

const initList = [
  { id: 1, name: '学习日语，备考N1', isDone: true },
  { id: 2, name: '学习英语，备考雅思', isDone: false },
  { id: 3, name: '学习GO，找工作', isDone: false },
]
export default function todosReducer(state = initList, action) {
  // 修改单个done属性
  if (action.type === CHANGE_STATE) {
    // 注意：状态不可变
    return state.map((item) => {
      if (item.id === action.id) {
        return {
          ...item,
          isDone: action.isDone,
        }
      } else {
        return item
      }
    })
  }

  return state
}
