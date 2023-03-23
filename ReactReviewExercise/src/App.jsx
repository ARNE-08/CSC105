import { useState } from 'react'
import './App.css'
import FavoriteSites from "./components/FavoriteSites"
import Profile from "./components/Profile"
import Gallery from "./components/Gallery"
import StateAssignmentOne from "./components/StateAssignmentOne"
import StateAssignmentTwo from './components/StateAssignmentTwo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FavoriteSites />
      <Profile />
      <Gallery />
      <StateAssignmentOne />
      <StateAssignmentTwo />
    </div>
  )
}

export default App
