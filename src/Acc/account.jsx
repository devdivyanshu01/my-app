import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const styles = {
  page: {
    padding: "20px",
    fontFamily: "Georgia, serif",
  },
  heading: {
    marginBottom: "20px",
    textAlign: "left",
  },
  container: {
    backgroundColor: "#2AF5FF",
    height: "auto",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "40px",
    padding: "40px",
    boxSizing: "border-box",
    margin: "0 auto",
  },
  card: {
  background: "#fff",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  padding: "24px",
  width: "300px",
  minHeight: "320px",
  position: "relative", 
},

  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    display: "block",
    margin: "0 auto 16px",
    backgroundColor: "#ccc",
  },
  editIcon: {
  position: "absolute", 
  top: "12px",
  right: "12px",
  fontSize: "18px",
  cursor: "pointer",
},

  editIconImg: {
    width: "20px",
    height: "20px",
  },
  details: {
    textAlign: "left",
    fontFamily: "serif",
    fontSize: "16px",
    lineHeight: "1.8em",
    paddingLeft: "8px",
  },
  feedbackCard: {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    padding: "24px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  feedbackBox: {
    width: "100%",
  },
  textarea: {
    width: "100%",
    height: "50px",
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    resize: "none",
    backgroundColor: "#bbb",
    color: "#000",
    fontWeight: "500",
  },
  stars: {
    fontSize: "24px",
    color: "#999",
    marginBottom: "16px",
    cursor: "pointer",
  },
  button: {
    backgroundColor: "#2AF5FF",
    border: "none",
    borderRadius: "8px",
    padding: "10px 16px",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "14px",
  },
};

const user = {
  profilePhoto: 'https://via.placeholder.com/100',
  username: 'john_doe',
  contact: '+1 234 567 890',
  email: 'john.doe@example.com',
  department: 'Engineering',
};

export default function Account() {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const handleStarClick = (star) => setRating(star);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Feedback: ${feedback}\nRating: ${rating} star(s)`);
    setFeedback('');
    setRating(0);
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>User Profile</h1>

      <div style={styles.container}>
        
        <div style={styles.card}>
          <div style={styles.editIcon}>
            <Link to='/Account/Edit'><img
              src="https://cdn-icons-png.flaticon.com/128/1827/1827933.png"
              alt="Edit"
              style={styles.editIconImg}
            /></Link>
          </div>
          <img src={user.profilePhoto} alt="Avatar" style={styles.avatar} />
          <div style={styles.details}>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Contact:</strong> {user.contact}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Department:</strong> {user.department}</p>
          </div>
        </div>

       
        <div style={styles.feedbackCard}>
          <h4 style={{ marginBottom: 8 }}>Give Your Feedback</h4>
          <div style={styles.feedbackBox}>
            <textarea
              placeholder="Write your feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows="3"
              style={styles.textarea}
            />
          </div>
          <div style={styles.stars}>
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                onClick={() => handleStarClick(i + 1)}
                style={{ color: i < rating ? '#FFD700' : '#999' }}
              >
                ★
              </span>
            ))}
          </div>
          <button style={styles.button} onClick={handleSubmit}>
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
}
