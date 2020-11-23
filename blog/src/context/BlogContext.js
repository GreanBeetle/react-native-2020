import createDataContext from './createDataContext'

/*
To reiterate a previous point, our reducer takes
two arguments
(a) state (although this could be anything! i.e. blogPosts)
(b) action 
*/
const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOGPOST': 
      return [...state, { title: `Post No. ${state.length+1}`}] 
    default: 
      return state
  }
}

const addBlogPost = dispatch => {
  return () => dispatch({ type: 'ADD_BLOGPOST' })
} 

export const { Context, Provider } = createDataContext(
  blogReducer, 
  { addBlogPost },
  [] 
)

