import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from '../constants/todo'
// console.log(FILTER_TITLES[SHOW_ALL]);
export function selectVisible(state = [], filter) {
    switch (filter) {
      case SHOW_ALL:
        console.log(1);
        return state;
      case SHOW_ACTIVE:
        console.log(2)
        return state.filter(todo => todo.isDone);
      case SHOW_COMPLETED:
        console.log(3);
        return state.filter(todo => !todo.isDone);
      default:
        return state;
    }
  }