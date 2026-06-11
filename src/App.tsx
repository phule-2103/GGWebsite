import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Vision from './components/Vision'
import CarbonTracking from './components/CarbonTracking'
import ReportingCompliance from './components/ReportingCompliance'
import ScalableSustainability from './components/ScalableSustainability'
import Footer from './components/Footer'
import About from './pages/About'
import GetInTouch from './pages/GetInTouch'
import Services from './pages/Services'
import './App.css'

function Home() {
  return (
    <main>
      <Hero />
      <Vision />
      <CarbonTracking />
      <ReportingCompliance />
      <ScalableSustainability />
    </main>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#fcfdfe]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
