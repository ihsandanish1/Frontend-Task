import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Restricted from './Restricted'
import ChampionSilver from './pages/ChampionSliver'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Restricted />} />
      <Route path="/champion-icy" element={<ChampionSilver />} />
    </Routes>
  )
}

export default App

