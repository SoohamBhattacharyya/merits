import React from "react";
import "./JoinTheCommunity.css";

function JoinTheCommunity() {
  return (
    <div className="join-container">
      <header className="join-hero">
        <h1>Welcome to MERITS</h1>
        <p>Join our growing community of learners, educators, and institutions</p>
      </header>

      <section className="join-options">
        <div className="option-card student">
          <h2>Student</h2>
          <p>Access quality learning materials, track progress, and connect with mentors.</p>
          <button onClick={() => window.location.href = "/student-login"}>Join as Student</button>
        </div>

        <div className="option-card educator">
          <h2>Educator</h2>
          <p>Share your expertise, manage learners, and grow your professional brand.</p>
          <button onClick={() => window.location.href = "/educator-login"}>Join as Educator</button>
        </div>

        <div className="option-card institution">
          <h2>Institution</h2>
          <p>Transform your institution digitally with powerful tools and analytics.</p>
          <button onClick={() => window.location.href = "/institution-login"}>Join as Institution</button>
        </div>
      </section>

      <section className="call-to-action">
        <h3>Need Help?</h3>
        <p>Reach out to us anytime at <a href="mailto:support@merits.in">support@merits.in</a></p>
      </section>

      <footer className="join-footer">
        <p>&copy; 2025 MERITS • All rights reserved</p>
      </footer>
    </div>
  );
}

export default JoinTheCommunity;
