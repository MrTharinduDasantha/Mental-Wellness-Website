import "./App.css"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import WorkingStep from "./components/WorkingStep"
import About from "./components/About" 
import Contact from "./components/Contact"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"  
import Footer from "./components/Footer"

function App() {
  return (
    <div className="font-primary overflow-x-hidden">
      <ToastContainer theme="dark" />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WorkingStep />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App