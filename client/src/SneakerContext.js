import { createContext, useContext, useState, useEffect } from 'react'

const SneakerContext = createContext([])

export const SneakerProvider = ({ children }) => {
  const [sneakers, setSneakers] = useState([]);
  const [currentSneaker, setCurrentSneaker] = useState()


  
  useEffect(() => {
    fetch(`/sneakers`)
      .then(response => response.json())
      .then(data => setSneakers([...data]))
  }, []);





  return (
    <SneakerContext.Provider value={{ sneakers, setSneakers }}>
      {children}
    </SneakerContext.Provider>
  )
}

const useSneaker = () => {
  const context = useContext(SneakerContext);

  if (context === undefined) {
    throw new Error("useSneaker must be used within a SneakerProvider")
  }
  return context;
}


export default useSneaker;