import { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom' /*cd "Projeto de Arquitetura DNC" e NPM run dev */

// Pages
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'

// UTILS
import ScrollToTop from './utils/ScrollToTop'
import { AppContext } from './contexts/appContext'

function App() {
  const appContext = useContext(AppContext)

  if (appContext.loading) {
    return <LoadingSpinner />
  }

  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/projects" element={<><Projects/><Link to="/">Navegar</Link></>} ></Route>
        <Route path="/contact" element={<Contact/>} ></Route>
      </Routes>
    </Router>
  )
}

export default App