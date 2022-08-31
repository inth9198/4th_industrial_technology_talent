import "./main.css"
import HeaderAdvertise from "./component/head/HeaderAdvertise";
import Header from "./component/container/Header";
import Main from "./component/main/Main";
import Footer from "./component/footer/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from "./component/search/Search";
import Goods from "./component/goods/Goods";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderAdvertise />
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<Main />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/goods" element={<Goods />}></Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
