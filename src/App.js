import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Product } from './pages/Product'
import { NavBar } from './components/NavBar'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/products/:handle" element={<Product />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
