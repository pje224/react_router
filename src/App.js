import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Tabs from "./Tabs";
import NotFound from "./NotFound";
import User from "./User";
import User01 from "./User01";

function App() {
  const userName = "박정은";
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">홈</Link>│<Link to="/about">소개</Link>│<Link to="/contact">연락</Link>│
        <Link to="/login">로그인</Link>│<Link to="/tabs">탭기능</Link>│<Link to={`/user/${userName}`}>유저</Link>│
        <Link to="/user01/유기현/30/서울">유저01</Link>
      </nav>

      {/* 화면에 보여지는 것🔽 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tabs" element={<Tabs />} />
        <Route path="/user/:userName" element={<User />} />
        <Route path="/user01/:name/:age/:city" element={<User01 />} />
        {/* 404 페이지 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
