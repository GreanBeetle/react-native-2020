import React from 'react'

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
(or around whatever component we're returning, in my case I'm return <Navigation/>)
WRAPS APP 
*/
export const BlogProvider = ({children}) => {
  const blogPosts = [
    { title: 'Blog Post One'}, 
    { title: 'Blog Post Two'}, 
    { title: 'Blog Post Three'}, 
    { title: 'Blog Post Four'}

  ]

  return (
    <BlogContext.Provider value={blogPosts}>
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
