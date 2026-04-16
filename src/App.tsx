import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Insights from './components/Insights/Insights'
import Cases from './components/Cases/Cases'
import Company from './components/Company/Company'
import Footer from './components/Footer/Footer'
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Insights />
        <Cases />
        <Company />
      </main>
      <Footer />
    </>
  )
}

export default App
