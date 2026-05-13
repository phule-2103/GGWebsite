import Header from './components/Header'
import Hero from './components/Hero'
import Vision from './components/Vision'
import CarbonTracking from './components/CarbonTracking'
import ReportingCompliance from './components/ReportingCompliance'
import ScalableSustainability from './components/ScalableSustainability'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-[#fcfdfe]">
      <Header />
      <main>
        <Hero />
        <Vision />
        <CarbonTracking />
        <ReportingCompliance />
        <ScalableSustainability />
      </main>
      <Footer />
    </div>
  )
}

export default App
