import React from 'react'
import Post from './components/Post.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ContactForm from './components/ContactForm.jsx'

function App() {
  return (
   <>
    <Header />
    <main>
      <Post />
    </main>
    <Footer />
    <ContactForm />
  </>
  )
}

export default App