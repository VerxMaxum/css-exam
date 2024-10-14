import { createContext } from 'react'
import { Landing } from './components/pages/Landing'
import { Link, Route, Routes } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { About } from './components/pages/About'
import { Community } from './components/pages/Community'
import { NewsEvents } from './components/pages/NewsEvents'

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
        <Route path="/news-and-events" element={<NewsEvents />} />
      </Routes>
    </>
  )
}

export default App
