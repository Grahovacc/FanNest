import React, { useEffect } from "react";
import "./TimeLine.css";

const TimeLine = () => {
  useEffect(() => {
    // Intersection Observer to detect when an item enters the viewport
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Stop observing the item after it becomes visible
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the item is visible
      }
    );

    items.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      items.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div class="timeline-container">
      <h2>Projects</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="content left">
            <h3>FanNest</h3>
            <p>
              FanNest is a platform that connects fans with their favorite
              creators through cryptocurrency...
            </p>
            <p>
              <strong>Role:</strong> Founder & CEO
            </p>
            <p>
              <strong>Stack:</strong> React, Vite, Express, Solana
            </p>
            <p>
              <strong>Links:</strong> <a href="#">Website</a>
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="content right">
            <h3>Project 2</h3>
            <p>A project focused on...</p>
            <p>
              <strong>Role:</strong> Role here
            </p>
            <p>
              <strong>Stack:</strong> Tech stack here
            </p>
            <p>
              <strong>Links:</strong> <a href="#">GitHub</a>
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="content left">
            <h3>Project 3</h3>
            <p>Description of another project...</p>
            <p>
              <strong>Role:</strong> Role here
            </p>
            <p>
              <strong>Stack:</strong> Tech stack here
            </p>
            <p>
              <strong>Links:</strong> <a href="#">Live Demo</a>
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="content right">
            <h3>To Be Declared</h3>
            <p>Project details to be announced...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
