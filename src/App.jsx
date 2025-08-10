import { Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Work from "./pages/Work.jsx";
import Todo from "./pages/Todo.jsx";
import Todo2 from "./pages/Todo2.jsx";

function App() {
  return (
    <Layout style={{ minHeight: "100vh", minWidth: "100vw", maxWidth: "100vw" }}>
      <Header style={{ padding: 0 }}>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="home">
            <Link to="/">홈</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">소개</Link>
          </Menu.Item>
          <Menu.Item key="work">
            <Link to="/work">작업화면</Link>
          </Menu.Item>
          <Menu.Item key="todo">
            <Link to="/todo">Todo</Link>
          </Menu.Item>
          <Menu.Item key="todo2">
            <Link to="/todo2">Todo2</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/todo2" element={<Todo2 />} />
        </Routes>
      </Content>
      <Footer>푸터</Footer>
    </Layout>
  );
}

export default App;
