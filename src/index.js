// src/index.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"; // 如果有全局样式
import "./styles.css";
import App from "./App"; // 主页面组件
import BlogPage from "./BlogPage"; // 博客页面组件
import TicTacToePage from "./TicTacToePage"; // TicTacToe 页面组件
import Projects from "./Projects"; // 项目页面组件
import Hobby from "./Hobby";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />} /> {/* 主页面 */}
        <Route path="/blogpage" element={<BlogPage />} /> {/* 博客页面 */}
        <Route path="/tictactoe" element={<TicTacToePage />} />{" "}
        {/* TicTacToe 页面 */}
        <Route path="/projects" element={<Projects />} /> {/* 项目页面 */}
        <Route path="/hobby" element={<Hobby />} /> {/* 兴趣页面 */}
        {/* 404 页面 */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
