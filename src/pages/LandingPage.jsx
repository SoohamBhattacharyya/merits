import React from "react";
import { Link } from "react-router-dom"; // ✅ Make sure this import is present
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing">
      <header className="header">
        <div className="logo">merits</div>
        <nav className="nav-links">
          <span>Home</span>
          <span>About</span>
          <span>Vision</span>

          {/* ✅ Correct link usage */}
          <a href="/join-the-community" target="_blank" rel="noopener noreferrer" className="join-link">Join the Community</a>

        </nav>
      </header>

      <main className="hero">
        <h1>Empowering Education with merits</h1>
        <p>Your gateway to the future of learning</p>
        <div className="login-options">
          <Link to="/student-login" className="login-card">Student Login</Link>
          <Link to="/educator-login" className="login-card">Educator Login</Link>
          <Link to="/institution-login" className="login-card">Institutional Login</Link>
           <Link to="/admin-login" className="login-card">Admin Login</Link>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2025 merits. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
