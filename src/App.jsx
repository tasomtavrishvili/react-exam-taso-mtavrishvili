import react from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Post from './components/Post.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      
      <main style={{ minHeight: '60vh', padding: '20px' }}>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Home />
                <Post />
              </>
            } 
          />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;