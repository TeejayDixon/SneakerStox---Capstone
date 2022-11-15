
import { createContext, useContext, useState } from 'react'

const UserContext = createContext([])

export const UserProvider = ({ children }) => {
  const [ current, setCurrentUser] = useState([]);
  return (
    <UserContext.Provider value={{ current, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  )
}

const useCurrentUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useCurrentUser must be used within a UserProvider")
  }
  return context;
}


export default useCurrentUser;