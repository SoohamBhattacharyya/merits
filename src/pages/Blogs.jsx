import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import "./Blogs.css";

function Blogs() {
  return (
    <div className="blogs-container">
      <h1>Community Blogs</h1>
      <p className="blogs-intro">
        Insights, stories, guides and tips from students, educators, and institutions.
      </p>

      <div className="blogs-grid">
        {blogs.map((b) => (
          <article className="blog-card" key={b.id}>
            <Link to={`/blogs/${b.id}`} className="blog-card-link">
              <img src={b.hero} alt={b.title} />
              <div className="blog-card-body">
                <h2>{b.title}</h2>
                <p className="blog-card-excerpt">{b.excerpt}</p>
                <p className="blog-card-meta">
                  By {b.author} • {b.date}
                </p>
                <div className="blog-card-tags">
                  {b.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
