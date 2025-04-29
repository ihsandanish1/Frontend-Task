import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Restricted from './Restricted'
import ChampionSilver from './pages/ChampionSliver'
import ChampionBlue from './pages/ChampionBlue'
import ChampionGold from './pages/ChampionGold'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Restricted />} />
      <Route path="/champion-icy" element={<ChampionSilver />} />
      <Route path="/champion-blue" element={<ChampionBlue />} />
      <Route path="/champion-gold" element={<ChampionGold />} />
    </Routes>
  )
}

export default App
