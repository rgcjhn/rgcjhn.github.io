import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/home';

export default function App() {
  return (
    <HashRouter>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}
