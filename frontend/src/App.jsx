import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import FruitPage from "./FruitPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fruits" element={<FruitPage />} />
      </Routes>
    </Router>
  );
}

export default App;
