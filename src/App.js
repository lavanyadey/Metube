import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import License from './pages/license';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/license" exact element={<License />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;