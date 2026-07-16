import './App.css';
import { initializeTheme } from './hooks/use-appearance';
import { useEffect } from 'react';
import RootApp from './pages/website/index'

// Import your landing page component here
// e.g., import LandingPage from './pages/LandingPage';

export default function App() {
  useEffect(() => {
    // This sets up light / dark mode on load
    try {
      initializeTheme();
    } catch (e) {
      console.warn("Theme initializer skipped:", e);
    }
  }, []);

  return (
    <RootApp/>
  );
}