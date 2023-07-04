import React,{createContext, useState} from 'react'

export const AuthContext = createContext(null)

const AuthProvider = (props) => {
const [currentUser, setCurrentUser] = useState(null)

  return (
     <AuthContext.Provider value={{currentUser, setCurrentUser}}>
        {props.children}
     </AuthContext.Provider>
  )
}

export default AuthProvider;