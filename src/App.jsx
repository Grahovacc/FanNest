import React, { useState } from "react";
import "./App.css";
import PolkadotWalletConnect from "./PolkadotWalletConnect"; 

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo">Polkatron</div>
        <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
          <a href="#home">Home</a>
          <a href="#creators">Creators</a>
          <a href="#about">About</a>
          <a href="#support">Support</a>
        </nav>
        <div className="auth-buttons">
          <div className="Connect-btn"><PolkadotWalletConnect /></div>
        </div>
        {}
        <button className="hamburger" onClick={toggleMenu}>
          &#9776; {}
        </button>
      </header>

      <main className="hero">
        <div className="hero-content">
          <h1>
            Unlock Premium <span className="highlight">Content</span> with Polkatron
          </h1>
          <p>
            Support your favorite creators and enjoy exclusive content. Pay easily with crypto and get the content you love.
          </p>
          <div className="hero-buttons">
            <button className="cta">Get Started</button>
            <button className="github">Contact Us</button>
          </div>
        </div>
        <div className="hero-image">
        </div>
      </main>

    </div>
  );
}

export default App;
