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
      return [
        ...state, 
        { 
          id: Math.floor(Math.random() * 99999), 
          title: `Post No. ${state.length+1}`
        }
      ]
    case 'DELETE_BLOGPOST':
      return state.filter(post => post.id !== action.payload)
    default: 
      return state
  }
}

const addBlogPost = dispatch => {
  return () => dispatch({ type: 'ADD_BLOGPOST' })
}

const deleteBlogPost = dispatch => {
  return (id) => dispatch({ type: 'DELETE_BLOGPOST', payload: id })
}

export const { Context, Provider } = createDataContext(
  blogReducer, 
  { addBlogPost, deleteBlogPost },
  [] 
)

