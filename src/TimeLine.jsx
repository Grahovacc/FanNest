import React, { useEffect } from "react";
import "./TimeLine.css";

const TimeLine = () => {
  useEffect(() => {
    const timelineItems = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    timelineItems.forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);
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
            <h3>Creator Empowerment</h3>
            <p>
              FanNest enables creators to maintain control over their content
              while monetizing directly from their supporters in a transparent
              environment.
            </p>
            <p>
              <strong>Virtues:</strong> Autonomy, Freedom, Innovation
            </p>
            <p>
              <strong>Stack:</strong> React, Smart Contracts, Blockchain
            </p>
            <p>
              <strong>Links:</strong> <a href="#">GitHub</a>
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="content left">
            <h3>Community Engagement</h3>
            <p>
              FanNest brings fans closer to creators through direct
              interactions, exclusive content, and events that help build a
              loyal community.
            </p>
            <p>
              <strong>Virtues:</strong> Interaction, Growth, Loyalty
            </p>
            <p>
              <strong>Stack:</strong> Web3, React, Firebase
            </p>
            <p>
              <strong>Links:</strong> <a href="#">Live Demo</a>
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="content right">
            <h3>Decentralized Platform</h3>
            <p>
              With Web3 integration, FanNest ensures users have full control
              over their data and interactions, offering transparency and
              security.
            </p>
            <p>
              <strong>Virtues:</strong> Security, Privacy, Ownership
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
