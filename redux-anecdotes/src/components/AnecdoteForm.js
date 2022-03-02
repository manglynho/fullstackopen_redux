import React from 'react'
//import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { createAnecdote} from '../reducers/anecdoteReducer'
import { setNotification} from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  //const dispatch = useDispatch()
  
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    //dispatch(createAnecdote(content)) 
    //(setNotification(`You created '${content}'`, 3000))
     props.createAnecdote(content) 
     props.setNotification(`You created '${content}'`, 5000)     
  }

  return (
    <form onSubmit={addAnecdote}>
      <input name="anecdote" />
      <button type="submit">add</button>
    </form>
  )
}

const mapDispatchToProps = dispatch => {  
  return {    
    createAnecdote: value => {      
      dispatch(createAnecdote(value))    
    }, 
    setNotification, 
  }
}

export default connect(  
  null,   
  mapDispatchToProps
  )(AnecdoteForm)

//export default AnecdoteForm