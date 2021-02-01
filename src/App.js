import { useState, useLayoutEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function useMediaQuery() {
  const [screenSize, setScreenSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateScreenSize() {
      setScreenSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return screenSize;
}

function App() {
  const [width] = useMediaQuery();
  let isDesktop = width <= 600 ? true : false;

  return (
    <div className="app">
      <Header isMobile={isDesktop} />
      <Main isMobile={isDesktop} />
      <Footer />
    </div>
  );
}

export default App;
