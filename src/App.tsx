import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { ChakraProvider } from '@chakra-ui/react'

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/about" element={ <About />} />
          <Route path="/farmers" element={ <Services />} />
          <Route path="/marketplace" element={ <Contact />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );

}

export default App;
