import React from "react";
import "./Header.css";

const Header = () => (
  <header>
    <nav>
      <h1>FanNest</h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
      </ul>
      <button>Connect Wallet</button>
    </nav>
  </header>
);

export default Header;
