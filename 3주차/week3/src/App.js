import "./main.css"
import HeaderAdvertise from "./component/head/HeaderAdvertise";
import Header from "./component/container/Header";
import Main from "./component/main/Main";
import Footer from "./component/footer/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from "./component/search/Search";
import Goods from "./component/goods/Goods";
import LogIn from "./component/login/LogIn";

function App() {
  return (
      <BrowserRouter>
        <HeaderAdvertise />
        <Header />
        <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/goods" element={<Goods />}></Route>
            <Route path="/login" element={<LogIn />}></Route>

        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
