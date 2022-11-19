import { createContext, useContext, useEffect, useState } from 'react'

const WishListContext = createContext([])

export const WishListProvider = ({ children }) => {







  return (
    <WishListContext.Provider value={{}}>
      {children}
    </WishListContext.Provider>
  )
}

const useWishList = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useWishList must be used within a UserProvider")
  }
  return context;
}


export default useWishList;