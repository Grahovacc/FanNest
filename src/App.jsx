import React, { useState, useEffect } from "react";
import "./App.css";
import PolkadotWalletConnect from "./PolkadotWalletConnect";
import computerImg from "./assets/computer_img.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.body.classList.toggle("menu-open", isMenuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isMenuOpen]);


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
          <div className="connect-button"><PolkadotWalletConnect /></div>
        </div>
        {!isMenuOpen && (
          <button className="hamburger-button" onClick={toggleMenu}>
            &#9776;
          </button>
        )}
      </header>

      {/* Hamburger Menu */}
      <div className={`slide-in-menu ${isMenuOpen ? "open" : ""}`}>

        <nav>
          <a href="#home">Home</a>
          <a href="#creators">Creators</a>
          <a href="#about">About</a>
          <a href="#support">Support</a>
        </nav>
      </div>

      {/* Overlay */}
      <div className={`overlay ${isMenuOpen ? "visible" : ""}`} onClick={toggleMenu}></div>

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

        <img src={computerImg} alt="Computer" className="computer-img" />
      </main>
    </div>
  );
}

export default App;
