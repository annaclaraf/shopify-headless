import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Product } from './pages/Product'
import { NavBar } from './components/NavBar'
import { NavMenu } from './components/NavMenu'
import { CartDrawer } from './components/CartDrawer'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <NavMenu />
        <CartDrawer />
        <Routes>
          <Route path="/products/:handle" element={<Product />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
