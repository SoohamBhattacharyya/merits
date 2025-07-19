import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import "./BlogPost.css";

function BlogPost() {
  const { blogId } = useParams();
  const blog = blogs.find((b) => b.id === blogId);

  const [likes, setLikes] = useState(0);
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState([]);

  if (!blog) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Blog Not Found</h2>
        <Link to="/blogs">← Back to Blogs</Link>
      </div>
    );
  }

  const handleAddComment = () => {
    if (!commentInput.trim()) return;
    setComments([{ text: commentInput, user: "You" }, ...comments]);
    setCommentInput("");
  };

  return (
    <article className="blog-post-container">
      <Link to="/blogs" className="back-link">← Back to Blogs</Link>

      <header className="blog-post-hero">
        <img src={blog.hero} alt={blog.title} />
        <h1>{blog.title}</h1>
        <p className="blog-post-meta">
          By {blog.author} • {blog.date}
        </p>
        <div className="blog-post-tags">
          {blog.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </header>

      <div className="blog-post-body">
        {blog.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}

        {blog.images?.length > 0 && (
          <div className="blog-post-images">
            {blog.images.map((img, i) => (
              <img key={i} src={img} alt={`Blog graphic ${i + 1}`} />
            ))}
          </div>
        )}
      </div>

      <div className="blog-post-actions">
        <button onClick={() => setLikes(likes + 1)}>👍 Like ({likes})</button>
      </div>

      {/* Comments */}
      <section className="blog-post-comments">
        <h3>Comments</h3>
        <div className="comment-input-row">
          <input
            type="text"
            placeholder="Write a comment..."
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAddComment();
            }}
          />
          <button onClick={handleAddComment}>Post</button>
        </div>
        <ul>
          {comments.map((c, i) => (
            <li key={i}>
              <strong>{c.user}:</strong> {c.text}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default BlogPost;
