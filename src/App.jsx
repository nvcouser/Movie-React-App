import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main/Main";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import News from "./pages/News";
import Navigate from "./header/Navigate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="News" element={<News />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
