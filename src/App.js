import React from 'react'
import Home from './pages/home'
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
        <Home />
      <Footer />
    </div>
  );
}

export default App;