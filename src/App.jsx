import { useState, createContext, useEffect } from 'react'
import Search from './components/Search'
import { perfumes } from './data/perfumeData'
import './App.css'

export const DataContext = createContext()

function App() {

  const [data, setData] = useState(perfumes);
  const [search, setSearch]=useState("")

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <DataContext.Provider value={{filteredData, setSearch, search}}>
      <Search />
      </DataContext.Provider>
    </div>
  )
}

export default App
