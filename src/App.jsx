import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import FloatingThemeSwitcher from './components/FloatingThemeSwitcher';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <FloatingThemeSwitcher />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

