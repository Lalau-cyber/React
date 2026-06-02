import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import Projetos from './components/projetos'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/projeto/:slug" element={<DetalheProjeto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
