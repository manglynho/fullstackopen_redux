import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote} from '../reducers/anecdoteReducer'
import { runAddNotification, clearNotification} from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const dispatch = useDispatch()
  
  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content)) 
    dispatch(runAddNotification())
    setTimeout(() => {dispatch(clearNotification()) }, 5000)
     
  }

  return (
    <form onSubmit={addAnecdote}>
      <input name="anecdote" />
      <button type="submit">add</button>
    </form>
  )
}

export default AnecdoteForm