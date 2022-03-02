import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':      
      return action.data
    case 'DO_VOTE': {
      const id = action.data
      const voteToChange = state.find(n => n.id === id)
      const changedVote = { 
        ...voteToChange, 
        votes: voteToChange.votes + 1 
      }
      return state.map(note =>
        note.id !== id ? note : changedVote 
      )
     }
    default:
      return state
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export const doVote = (id, anecdote) => {
  return async dispatch => {
    const changedVotes = { 
      ...anecdote, 
      votes: anecdote.votes + 1 
    }
    const updatedAnecdote = await anecdoteService.update(id, changedVotes)
    dispatch({
      type: 'DO_VOTE',
      data: updatedAnecdote.id,
    })
  }
}

export default anecdoteReducer