import './App.css';
import LandingPage from './pages/LandingPage';
import NavBar from './components/NavBar';
import InformationPage from './pages/InformationPage';
import TodoPage from './pages/TodoPage';
import AboutPage from './pages/AboutPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Aboutpage" element={<AboutPage />} />
          <Route path="/Informationpage" element={<InformationPage />} />
          <Route path="/Todopage" element={<TodoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
