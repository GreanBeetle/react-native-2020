import React, { useReducer } from 'react'

/*
To reiterate a previous point, our reducer takes
two arguments
(a) state (although this could be anything! i.e. blogPosts)
(b) action 
*/
const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOGPOST':
      return [...state, { title: `Post No. ${state.length + 1}` }]
      break
    case 'DELETE_BLOGPOST':
      return state
      break
    case 'EDIT_BLOGPOST':
      return state
      break
    default:
      return state
  }
}


/* 
The React.createContext() object is the "pipe" that will
shepherd props/data from Context to whichever child component
needs it
*/
const BlogContext = React.createContext()

/* 
This Provider is an HOC of sorts, as it  
accepts child components as arguments and returns, well, 
child components wrapped with BlogContext. 
In App.js we wrap  <BlogProvider> around <App /> 
(or around whatever component we're returning, in my case I return <Navigation/>)
WRAPS APP 
*/
export const BlogProvider = ({ children }) => {
  /* 
  With useReducer() the first argument is always the reducer 
  that we want to use. In this case, we're using
  blogReducer, the method we wrote above. 
  The second argument is the initial state object. 
  In the case we're using an empty array. 
  
  useReducer(blogReducer, [])

  From the useReducer() function, we destructure 
  (a) the state value, which in this case is blogPosts, and
  (b) dispatch, which dispatches an action to change the state value
  */
  const [blogPosts, dispatch] = useReducer(blogReducer, [])

  /* 
  Once again, using dispatch() magic to dispatch an action to our reducer ... 
  */
  const addBlogPost = () => dispatch({ type: 'ADD_BLOGPOST' })


  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  )
}

/* 
note that this is the default export
however we are also have the named export, BlogProvider
WRAPS INDIVIDUAL COMPONENTS, SCREENS, ETC 
*/
export default BlogContext
