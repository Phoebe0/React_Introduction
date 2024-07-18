// 实现本地存储
export default function localToken(state = '', action) {
  switch (action.type) {
    case 'SET_LOCAL_TOKEN':
      localStorage.setItem('token', state)
      return action.token

    default:
      return localStorage.getItem('token') || ''
  }
}
