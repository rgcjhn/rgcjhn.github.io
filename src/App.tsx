import { HashRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/scroll-to-top';
import HomePage from './pages/home';
import NotFoundPage from './pages/not-found';
import ProjectPage from './pages/project';

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}
