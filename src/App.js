import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Product } from './pages/Product'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/products/:handle" element={<Product />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
