import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Report from './pages/Report'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Navbar from './components/navbar'
import Footer from "./components/footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}