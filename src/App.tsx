import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import StoryPage from './pages/StoryPage';
import TeamPage from './pages/TeamPage';
import ImpactPage from './pages/ImpactPage';
import GalleryPage from './pages/GalleryPage';
import JoinUsPage from './pages/JoinUsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/join" element={<JoinUsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
