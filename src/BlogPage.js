import React from "react";
import { Link } from "react-router-dom";
import "./App.css"; // 引用样式文件
import Header from "./header"; // 引用 Header 组件

function BlogPage() {
  return (
    <div className="app">
      <div className="content">
        <Header /> {/* 添加 Header 只需一行代码*/}
        <h2>Welcome to My Blog!</h2>
        <p>This is where I share my thoughts, updates, and insights.</p>
        <p>
          Feel free to explore my <Link to="/tictactoe">Tic-Tac-Toe game</Link>{" "}
          to take a break from reading.
        </p>
        <p>
          Here, I will post articles about various topics of interest. Stay
          tuned for more updates!
        </p>
        <p>Additional content will be added here as the blog grows.</p>
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
