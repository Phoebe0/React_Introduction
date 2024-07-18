import {
  ADD_TODO,
  CHANGE_ALL,
  CHANGE_STATE,
  DELETE_TODO,
} from '../constants/todo'

const initList = [
  { id: 1, name: '学习日语，备考N1', isDone: true },
  { id: 2, name: '学习英语，备考雅思', isDone: false },
  { id: 3, name: '学习GO，找工作', isDone: false },
]
export default function todosReducer(state = initList, action) {
  // 修改单个done属性
  switch (action.type) {
    case CHANGE_STATE:
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
    case DELETE_TODO:
      return state.filter((item) => {
        // 过滤掉与选择的这一行相同的id
        return item.id !== action.id
      })
    case ADD_TODO:
      // 状态不可变！！！
      if (!action.name.trim()) return state
      return [
        {
          id: state.length + 1,
          name: action.name,
          isDone: false,
        },
        ...state,
      ]
    case CHANGE_ALL:
      return state.filter((item) => item.isDone !== action.isDone)

    default:
      return state
  }
}
