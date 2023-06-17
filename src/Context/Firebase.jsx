import React, { createContext } from 'react'

const FirebaseContext = createContext(null)

const FirebaseProvider = (props) => {
  return (
    <FirebaseContext.Provider>
      {props.children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseProvider