import React, { useState } from 'react';

const Edit = ({ user = {}, onSave }) => {
  const [form, setForm] = useState({
    username: user.username || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    email: user.email || '',
    realName: user.realName || '',
    accessLevel: user.accessLevel || '',
    projectAccessLevel: user.projectAccessLevel || '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.newPassword && form.newPassword !== form.confirmPassword) {
      setError('New password and confirm password do not match.');
      return;
    }
    setError('');
    if (onSave) onSave(form);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>User Profile</h2>
      <button style={styles.editBtn}>Edit Account</button>

      <form onSubmit={handleSubmit}>
        <table style={styles.table}>
          <tbody>
            {renderRow("Username", "username", form.username, handleChange)}
            {renderRow("Current Password", "currentPassword", form.currentPassword, handleChange, "password")}
            {renderRow("New Password", "newPassword", form.newPassword, handleChange, "password")}
            {renderRow("Confirm Password", "confirmPassword", form.confirmPassword, handleChange, "password")}
            {renderRow("Email", "email", form.email, handleChange, "email")}
            {renderRow("Real Name", "realName", form.realName, handleChange)}
            {renderSelect("Access Level", "accessLevel", form.accessLevel, handleChange, ["user", "manager", "admin"])}
            {renderSelect("Project Access Level", "projectAccessLevel", form.projectAccessLevel, handleChange, ["viewer", "contributor", "owner"])}
            <tr>
              <td colSpan={2} style={{ padding: "16px", background: "#ccc" }}>
                <button type="submit" style={styles.submitBtn}>Update User</button>
              </td>
            </tr>
          </tbody>
        </table>
        {error && <div style={styles.error}>{error}</div>}
      </form>
    </div>
  );
};

// Reusable field renderer
const renderRow = (label, name, value, onChange, type = "text") => (
  <tr>
    <td style={styles.labelCell}>{label}</td>
    <td><input name={name} type={type} value={value} onChange={onChange} style={styles.input} required /></td>
  </tr>
);

// Reusable select renderer
const renderSelect = (label, name, value, onChange, options) => (
  <tr>
    <td style={styles.labelCell}>{label}</td>
    <td>
      <select name={name} value={value} onChange={onChange} style={styles.input} required>
        <option value="">Select</option>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt.charAt(0).toUpperCase() + opt.slice(1)}</option>
        ))}
      </select>
    </td>
  </tr>
);

// Inline styles to match screenshot
const styles = {
  container: {
    maxWidth: "900px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Georgia, serif",
  },
  header: {
    textAlign: "left",
    fontSize: "24px",
    marginBottom: "10px",
  },
  editBtn: {
    backgroundColor: "#2AF5FF",
    border: "none",
    padding: "10px 20px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  labelCell: {
    backgroundColor: "#999",
    color: "#fff",
    padding: "12px",
    textAlign: "left",
    width: "40%",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "none",
    borderBottom: "1px solid #ccc",
  },
  submitBtn: {
    backgroundColor: "#2AF5FF",
    border: "none",
    padding: "10px 20px",
    fontWeight: "bold",
    borderRadius: "6px",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
};

export default Edit;
