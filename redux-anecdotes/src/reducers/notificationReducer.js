
const notificationReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_NOTIF':
            return action.data
          case 'UNSET_NOTIF':
            if(state.id === action.data.id){
              return null 
            }
            return state
        default:
          return state
      }
  }

  function showNotification(id, text) {
    let data = {
        id: id,
        text: text,
      }
    return { type: 'SET_NOTIF', data }
  }
  function hideNotification(id) {
    let data = {
      id: id,
      text: null,
    }
    return { type: 'UNSET_NOTIF', data }
  }
  
let nextNotificationId = 0

export function setNotification(text, time) {
  return function (dispatch) {
    const id = nextNotificationId++
    dispatch(showNotification(id, text))
    setTimeout(() => {
      dispatch(hideNotification(id))
    }, time)
  }
}


export default notificationReducer