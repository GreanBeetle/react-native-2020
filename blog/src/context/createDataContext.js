import React, { useReducer } from 'react'

/* 
What this file does is, it automates the process of creating context. 
Our function takes 3 arguments that are the same time and again when we create context. 
The arguments are 
(a) reducer, i.e. the reducer function 
(b) actions, i.e. will be an object {} containing dispatch and various other callbacks necessary
to dispatch action and update state
(c) initialState, whatever initialState we need for our particular context, 
which could be an array [], a "string", an object {}, or whatever 

Our function creates and returns two things, 
(a) Context
(b) Provider
*/
export default (reducer, actions, initialState) => {
  const Context = React.createContext() 

  const Provider = ({children}) => {
    /* 
    Pass (a) reducer and (b) initialState to useReducer. 
    Destructure (a) state (b) dispatch. 
    */
    const [state, dispatch] = useReducer(reducer, initialState)
    
    /*     
    actions are this 
    { addBlogPost: dispatch => { return () => {} } }
    we loop through the actions object and "bind"
    the appropriate action function to boundActions. 
    The idea here, in our example, at least, is that 
    we want to pass dispatch() to our addBlogPost() method
    AND any other methods we create in the future. I imagine we will 
    create editBlogPost() and deleteBlogPost() functions as well.  
    */
    const boundActions = {}
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch)
    }
    
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    )
  }

  return { Context, Provider }
}