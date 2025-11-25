import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './widgets/navbar/Navbar';
import Profile from './pages/ProfilePage/ProfilePage';
import PortofolioPage from './pages/PortofolioPage/PortofolioPage';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/portofolio" element={<PortofolioPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;