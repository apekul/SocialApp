import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./Components/Homepage/HomePage";
import Auth from "./Components/Auth/Auth";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/" element={<Auth />} />
          {/* Wildcard route for handling non-existing routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
