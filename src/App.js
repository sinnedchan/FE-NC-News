import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Topics from "./pages/Topics";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import ArticleCard from "./components/ArticleCard";
import UserContext from "./UserContext";

function App() {
  return (
    <UserContext.Provider value="jessjelly">
      <div>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/topics/:topic_name" element={<Topics />} />
          <Route path="/articles/:article_id" element={<ArticleCard />} />
          <Route path="/*" element={<p>404 page not found</p>} />
        </Routes>

        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
