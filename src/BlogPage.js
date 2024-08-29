import React from "react";
import { Link } from "react-router-dom";
import "./App.css"; // 引用样式文件
import Header from "./header"; // 引用 Header 组件

function BlogPage() {
  return (
    <div className="app">
      <div className="content">
        <Header /> {/* 添加 Header 只需一行代码 */}
        <h2>26th Aug, 2024</h2>
        <p>I have climbed the Gros Morne Mountain.</p>
        <div style={{ float: "left", marginRight: "10px" }}>
          <img
            src={process.env.PUBLIC_URL + "/grosMorne1.jpg"}
            alt="Image"
            style={{
              width: "320px",
              height: "auto",
            }}
          />
        </div>
        <div style={{ float: "right", marginRight: "10px" }}>
          <img
            src={process.env.PUBLIC_URL + "/grosMorne2.jpg"}
            alt="Image"
            style={{
              width: "320px",
              height: "auto",
            }}
          />
        </div>
        <footer className="footer">
          <p>
            <a
              href="https://www.linkedin.com/in/wenkai-wang-367aa228a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("./link.png")}
                alt="LinkedIn"
                className="footer-icon"
              />
              Connect Me
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default BlogPage;
