import React, { useState } from "react";
import "./AskQuestion.css";

function AskQuestion() {
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState("");

  const handlePostQuestion = () => {
    if (questionText.trim() === "") return;
    const newQuestion = {
      id: Date.now(),
      text: questionText,
      upvotes: 0,
      downvotes: 0,
      comments: [],
    };
    setQuestions([newQuestion, ...questions]);
    setQuestionText("");
  };

  const handleVote = (id, type) => {
    const updated = questions.map((q) => {
      if (q.id === id) {
        if (type === "up") q.upvotes += 1;
        else q.downvotes += 1;
      }
      return q;
    });
    setQuestions(updated);
  };

  const handleAddComment = (id, commentText) => {
    const updated = questions.map((q) => {
      if (q.id === id) {
        q.comments.push(commentText);
      }
      return q;
    });
    setQuestions(updated);
  };

  return (
    <div className="ask-container">
      <h1>🧠 Ask the Community</h1>
      <textarea
        className="ask-input"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        placeholder="What's your question?"
      />
      <button className="post-btn" onClick={handlePostQuestion}>
        Post Question
      </button>

      <div className="question-list">
        {questions.map((q) => (
          <div key={q.id} className="question-card">
            <p className="question-text">{q.text}</p>
            <div className="vote-section">
              <button onClick={() => handleVote(q.id, "up")}>👍 {q.upvotes}</button>
              <button onClick={() => handleVote(q.id, "down")}>👎 {q.downvotes}</button>
            </div>

            {/* Comment Section */}
            <div className="comment-section">
              <h4>Comments</h4>
              <ul>
                {q.comments.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
              <input
                type="text"
                placeholder="Add a comment..."
                onKeyDown={(e) => {
                  if (e.key === "Enter" && e.target.value.trim()) {
                    handleAddComment(q.id, e.target.value);
                    e.target.value = "";
                  }
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AskQuestion;
