import React, { useState, useEffect } from "react";
import "./App.css";
import PolkadotWalletConnect from "./PolkadotWalletConnect";
import Lenis from "lenis";
import computerImg from "./assets/computer_img.png";
import TimeLine from "./TimeLine";
import Footer from "./Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [touchStartX, setTouchStartX] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAccountChange = (account) => {
    setSelectedAccount(account);
  };

  useEffect(() => {
    document.body.classList.toggle("menu-open", isMenuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isMenuOpen]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 100) {
      return;
    }
    if (touchEndX - touchStartX > 100) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });
    lenis.on("scroll", (e) => console.log(e));

    return () => lenis.destroy(); // Cleanup on unmount
  }, []);

  return (
    <>
      <div className="background-pattern"></div>
      <div className="container">
        <header className="header">
          <div className="logo">
            <span className="logo-fan">Fan</span>
            <span className="logo-nest">Nest</span>
          </div>
          <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
            <a href="#home">Home</a>
            <a href="#creators">Creators</a>
            <a href="#about">About</a>
            <a href="#support">Support</a>
          </nav>
          <div className="auth-buttons">
            <div className="connect-button">
              <PolkadotWalletConnect setSelectedAccount={handleAccountChange} />
            </div>
          </div>
          {!isMenuOpen && (
            <button className="hamburger-button" onClick={toggleMenu}>
              &#9776;
            </button>
          )}
        </header>

        {/* Hamburger Menu */}
        <div
          className={`slide-in-menu ${isMenuOpen ? "open" : ""}`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <nav>
            <a href="#home">Home</a>
            <a href="#creators">Creators</a>
            <a href="#about">Profile</a>
            <a href="#support">Contact Us</a>
            {selectedAccount && (
              <span className="account-info">{selectedAccount}</span>
            )}
            {!selectedAccount && (
              <button
                className="connect-button"
                onClick={(e) => {
                  e.stopPropagation();
                  const connectButton = document.querySelector(
                    ".auth-buttons .connect-button button"
                  );
                  connectButton.click();
                }}
              >
                Connect Wallet
              </button>
            )}
          </nav>
        </div>

        {/* Overlay */}
        <div
          className={`overlay ${isMenuOpen ? "visible" : ""}`}
          onClick={toggleMenu}
        ></div>

        <main className="hero">
          <div className="hero-content">
            <h1>
              Unlock Premium <span className="highlight">Content</span> with
              <div className="second-logo">
                <span className="logo-fan2">Fan</span>
                <span className="logo-nest2">Nest</span>
              </div>
            </h1>
            <p>
              Support your favorite creators and enjoy exclusive content. Pay
              easily with crypto and get the content you love.
            </p>
            <div className="hero-buttons">
              <button className="cta">Get Started</button>
              <button className="github">Contact Us</button>
            </div>
          </div>

          <img src={computerImg} alt="Computer" className="computer-img" />
        </main>
        <div className="content">
          <div className="payment-options">
            <div className="payment-option">
              <h3>Decentralized Payments</h3>
              <p>
                Experience the future of creator support with cutting-edge Web3
                technologies
              </p>
              <h2></h2>
            </div>
            <div className="payment-option">
              <h3>Community Governance</h3>
              <p>
                Experience the future of creator support with cutting-edge Web3
                technologies
              </p>
              <h2></h2>
            </div>
            <div className="payment-option">
              <h3>About us</h3>
              <p>
                Experience the future of creator support with cutting-edge Web3
                technologies
              </p>
              <h2></h2>
            </div>
          </div>
        </div>
      </div>
      <TimeLine />
      <Footer />
    </>
  );
}

export default App;
