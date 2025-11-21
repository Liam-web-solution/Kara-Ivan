
import './App.css'
import React from 'react'
import About from './About'
import Contact from './Contact'
import Technologies from './Technologies'
import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'
import Projects from './Projects'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 antialiased">
      <div className="absolute inset-0 `bg-gradient-to-b` from-slate-900 via-slate-900 to-slate-800/90 pointer-events-none
" />

        <Header />

        <main className="relative z-10">
          <Hero />

          <About />

          <div className="max-w-7xl mx-auto px-6 lg:px-8">


            <Projects/>

            <Technologies />

            <Contact />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8">
             <Footer />
          </div>
        </main>
    </div>
    
  )
}

export default App