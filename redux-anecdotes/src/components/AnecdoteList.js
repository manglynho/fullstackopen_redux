import React from "react";
//import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { doVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

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


const AnecdoteList = (props) => {
  //const dispatch = useDispatch()  
  
  //const anecdotes = useSelector(state => state.anecdotes).sort((a, b) => b.votes - a.votes);
 
  /*const anecdotes = useSelector(({ filter, anecdotes })  => {    
    if ( filter === 'ALL' || filter === '' ) {      
      return anecdotes.sort((a, b) => b.votes - a.votes)   
    }
    return anecdotes.filter(el => el.content.toLowerCase().indexOf(filter.toLowerCase()) !== -1).sort((a, b) => b.votes - a.votes)    
  })*/

  return(
    <div>
      {props.anecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => {
            props.doVote(anecdote.id, anecdote)
            props.setNotification(`You voted '${anecdote.content}'`, 5000)
          } 
          }
        />
      )}
    </div>
  )
}

const mapStateToProps = (state) => {  
  if ( state.filter === 'ALL' ) {    
    return { 
      anecdotes: state.anecdotes.sort((a, b) => b.votes - a.votes)      
    }  
  }  return {    
    anecdotes: state.anecdotes.filter(el => el.content.toLowerCase().indexOf(state.filter.toLowerCase()) !== -1).sort((a, b) => b.votes - a.votes) 
  }
}

const mapDispatchToProps = {  doVote, setNotification }

//export default AnecdoteList
const ConnectedAnecdoteList = connect(mapStateToProps,mapDispatchToProps)(AnecdoteList)
export default ConnectedAnecdoteList