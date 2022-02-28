
const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_ADD':
          return 'Added new anecdote'
        case 'SET_VOTE':
          return 'Just Voted'
        case 'SET_CLEAR':
          return null
        default:
          return state
      }
  }
  
  export const runAddNotification = () => {  return {
    type: 'SET_ADD'
  }
}

export const runVoteNotification = () => {  return {
    type: 'SET_VOTE'
  }
}
  
  export const clearNotification = () => {  return {
    type: 'SET_CLEAR'
  }
}

  
  export default notificationReducer