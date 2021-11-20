import { useContext, useEffect, useState } from 'react'
import BounceLoader from 'react-spinners/BounceLoader'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
import Education from './components/Education/Education'
// import CustomCursor from './CustomCursor/CustomCursor'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3900)
  }, [])
  return (
    <div id='top' className={`${themeName} app`}>
      {/* <CustomCursor /> */}
      {loading ? (
        <div className='loader'>
          <BounceLoader color='#90a0d9' loading={loading} />
          <h6>
            A N U J A <br />O s w a l
          </h6>
        </div>
      ) : (
        <>
          <Header />
          <main>
            <About />
            <Education />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <ScrollToTop />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
