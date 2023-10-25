import { createContext, useState } from "react"
import Home from "./pages/Home";

export const GlobalInfo = createContext();

const App = () => {
  const [data, updateData] = useState({
    rank: 12890,
    percentile: 37,
    correct: 7
  })

  return (
    <GlobalInfo.Provider value={{
      data, updateData
    }}>
      <Home />
    </GlobalInfo.Provider>
  )
}

export default App