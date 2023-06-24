import React, { createContext } from "react"

const Context = createContext(null)

const FirebaseProvider = (props) => {
  return (
    <Context.Provider>
      {props.children}
    </Context.Provider>
  )
}

export default FirebaseProvider