import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import PolkadotWalletConnect from "./PolkadotWalletConnect";
import Lenis from "lenis";
import computerImg from "../assets/computer_img.png";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import "../../src/index.css";

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [touchStartX, setTouchStartX] = useState(0);
  const navigate = useNavigate();

  const handleLaunchApp = () => {
    navigate("/main");
  };

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
            <a href="/">Home</a>
            <a href="#creators">Creators</a>
            <a href="#features-section">About</a>
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
            <a href="/">Home</a>
            <a href="#creators">Creators</a>
            <a href="#about">Profile</a>
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
              <button onClick={handleLaunchApp} className="cta">
                Get Started
              </button>
              <button className="github">Contact Us</button>
            </div>
          </div>

          <img src={computerImg} alt="Computer" className="computer-img" />
        </main>
        <div id="features-section" className="features-section">
          <div className="features">
            <div className="feature">
              <h3>Direct Creator Support</h3>
              <p>
                Enable direct support for your favorite creators without
                intermediaries. Using Web3, payments go straight to the
                creators, helping them focus on making great content.
              </p>
            </div>
            <div className="feature">
              <h3>Secure Payments with Cryptocurrency</h3>
              <p>
                Experience fast and secure payments using your crypto wallet.
                Our platform ensures a smooth process for both supporters and
                creators.
              </p>
            </div>
            <div className="feature">
              <h3>Exclusive Content Access</h3>
              <p>
                Unlock special posts, videos, and behind-the-scenes content
                shared exclusively with supporters. Gain access to what you love
                directly from the source.
              </p>
            </div>
          </div>
        </div>
        <div className="content">
          <div class="HeroSection">
            <div class="HeroContent">
              <h2>Join FanNest & Support Your Favorite Creators with Web3</h2>
              <p>
                Experience a new way to connect with creators using
                cryptocurrency, unlock exclusive content, and be part of a
                decentralized future.
              </p>
              <button onClick={handleLaunchApp} class="LaunchButton">
                Launch App
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
