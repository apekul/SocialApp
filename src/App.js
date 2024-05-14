import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import HomePage from "./Components/Homepage/HomePage";
import Auth from "./Components/Auth/Auth";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  const location = useLocation();
  const refreshToken = localStorage.getItem("refreshToken");
  return (
    <div className="App">
      {location.pathname !== "/auth" && <Navbar />}
      <Routes>
        {!refreshToken && <Route path="/auth" element={<Auth />} />}

        {/* If not refresh token then navigate to /auth */}
        {!refreshToken && (
          <Route path="/" element={<Navigate to="/auth" replace />} />
        )}
        <Route path="/" element={<HomePage />} />
        {/* Wildcard route for handling non-existing routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
