import React from "react";
import { useNavigate } from "react-router-dom";
import "./JoinTheCommunity.css";

function JoinTheCommunity() {
  const navigate = useNavigate();

  return (
    <div className="join-container">
      {/* Hero section */}
      <header className="join-hero">
        <h1>Join the merits Community</h1>
        <p>Connect • Learn • Get Rewarded • Build Network</p>
      </header>

      {/* AI Matchmaking Section */}
      <section className="ai-match">
        <h2>🤝 Let's Match </h2>
        <p>Drop your professional skills - get your proper match and build network !</p>
        <button
          className="match-button"
          onClick={() => alert("AI Matching Coming Soon!")}
        >
          Let's Match within 59 seconds!
        </button>
      </section>

      {/* Blog / Q&A Section */}
      <section className="blog-section">
        <h2>🧠 Community Blogs and Q&A</h2>
        <p>Ask questions, share knowledge, and get rewarded.</p>
        <button onClick={() => navigate("/ask-question")}>Ask a Question</button>
        <button onClick={() => navigate("/blogs")}>Explore Blogs</button>
      </section>

      {/* Job Portal Section */}
      <section className="job-section">
        <h2>💼 Find Job at 12 minutes !</h2>
        <p>Looking for a job or hiring talent? Here you go!</p>
        <div className="job-buttons">
          <button onClick={() => (window.location.href = "/job-seeker")}>
            Job Seeker
          </button>
          <button onClick={() => (window.location.href = "/recruiter")}>
            Recruiter
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="join-footer">
        <p>&copy; 2025 MERITS • All rights reserved</p>
      </footer>
    </div>
  );
}

export default JoinTheCommunity;
