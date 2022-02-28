import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { doVote } from '../reducers/anecdoteReducer'
import { runVoteNotification, clearNotification} from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  return(
    <div key={anecdote.id}>
        <div>
        {anecdote.content}
        </div>
        <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
        </div>
  </div>
  )
}


const AnecdoteList = () => {
  const dispatch = useDispatch()  
  
  //const anecdotes = useSelector(state => state.anecdotes).sort((a, b) => b.votes - a.votes);
 
  const anecdotes = useSelector(({ filter, anecdotes })  => {    
    if ( filter === 'ALL' || filter === '' ) {      
      return anecdotes.sort((a, b) => b.votes - a.votes)   
    }
    return anecdotes.filter(el => el.content.toLowerCase().indexOf(filter.toLowerCase()) !== -1).sort((a, b) => b.votes - a.votes)    
  })

  return(
    <div>
      {anecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => {
            dispatch(doVote(anecdote.id))
            dispatch(runVoteNotification())
            setTimeout(() => {dispatch(clearNotification()) }, 5000)
          } 
          }
        />
      )}
    </div>
  )
}

export default AnecdoteList