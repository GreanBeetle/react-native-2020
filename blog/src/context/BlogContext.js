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
child components wrapped with BlogContext
*/
export const BlogProvider = ({children}) => {
  return (
    <BlogContext.Provider>
      {children}
    </BlogContext.Provider>
  )
}

