import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ThemeProvider, useThemeContext } from './context/ThemeContext';
import ErrorBoundary from './components/Common/ErrorBoundary';
import Loader from './components/Common/Loader';
import Cursor from './components/Common/Cursor';
import ScrollProgressBar from './components/Common/ScrollProgressBar';
import BackToTop from './components/Common/BackToTop';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function ThemedToastContainer() {
  const { theme } = useThemeContext();
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={4000}
      theme={theme}
      newestOnTop
      closeOnClick
      pauseOnHover
    />
  );
}

function AppShell() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Loader />
      <Cursor />
      <ScrollProgressBar />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
      <BackToTop />
      <ThemedToastContainer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </ThemeProvider>
  );
}
