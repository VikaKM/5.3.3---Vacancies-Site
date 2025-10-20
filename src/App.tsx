import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout }  from "./components/Layout";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutMePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/vacancies" replace />} />
          <Route path="vacancies" element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
