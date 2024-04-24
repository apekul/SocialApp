import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Auth from "./Components/Auth/Auth";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<Auth />} />
          {/* Wildcard route for handling non-existing routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
