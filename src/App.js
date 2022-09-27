import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/*" element={<p>404 page not found</p>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
