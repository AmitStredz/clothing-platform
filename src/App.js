import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ProductDetails from './pages/ProductDetails';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-[#f8f4f1]">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
