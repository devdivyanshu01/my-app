import { useState } from "react";
import MyFormComponent from "./captcha";

const inputStyle = {
  padding: '0.6rem',
  borderRadius: '0.5em',
  border: '1px solid #ccc',
  fontSize: '1rem',
  marginTop: '0.3rem',
  width: '100%',
  boxShadow: '2px 2px 4px rgb(119, 119, 119)',
  backgroundColor: 'rgb(184, 184, 184)'
};

const formGroupStyle = {
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  margin: '0.5rem'
};


const departments = ["IT", "HR", "Finance", "Support"];
const categories = ["Hardware", "Software", "Network", "Other"];
const types = ["Issue", "Request", "Inquiry"];
const priorities = ["Low", "Medium", "High", "Urgent"];

function generateTicketNumber() {
    return "TCKT-" + Math.floor(100000 + Math.random() * 900000);
}

export default function New() {
    const [form, setForm] = useState({
        ticketNumber: generateTicketNumber(),
        name: "",
        department: "",
        date: "",
        subject: "",
        category: "",
        type: "",
        priority: "",
        description: "",
        humanVerification: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");
        setSubmitted(true);
    };

    if (submitted) {
        return <div>Ticket submitted successfully!</div>;
    }

    return (
<form onSubmit={handleSubmit} style={{maxWidth: '900px', margin: '2rem auto', padding: '2rem', backgroundColor: '#fff', borderRadius: '1em', display: 'flex', flexDirection: 'column', fontFamily: 'sans-serif',}}>
  <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Create New Ticket</h2>

  <div style={{ display: 'flex' }}>
    <div style={formGroupStyle}>
      <label>Ticket No.</label>
      <input type="text" name="ticketNumber" value={form.ticketNumber} readOnly style={inputStyle} />
    </div>
    <div style={formGroupStyle}>
      <label>Date</label>
      <input type="date" name="date" value={form.date} onChange={handleChange} required style={inputStyle} />
    </div>
  </div>

  <div style={{ display: 'flex' }}>
    <div style={formGroupStyle}>
      <label>Name</label>
      <input type="text" name="name" value={form.name} onChange={handleChange} required style={inputStyle} />
    </div>
    <div style={formGroupStyle}>
      <label>Department</label>
      <select name="department" value={form.department} onChange={handleChange} required style={inputStyle}>
        <option value="">Select</option>
        {departments.map((d) => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>
    </div>
  </div>

  <div style={{ display: 'flex' }}>
    <div style={{ ...formGroupStyle, width: '100%' }}>
      <label>Subject</label>
      <input type="text" name="subject" value={form.subject} onChange={handleChange} required style={inputStyle} />
    </div>
  </div>

  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <div style={{ flex: '1', maxWidth: '300px' }}>
      <div style={formGroupStyle}>
        <label>Category</label>
        <select name="category" value={form.category} onChange={handleChange} required style={inputStyle}>
          <option value="">Select</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div style={formGroupStyle}>
        <label>Type</label>
        <select name="type" value={form.type} onChange={handleChange} required style={inputStyle}>
          <option value="">Select</option>
          {types.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <div style={formGroupStyle}>
        <label>Priority</label>
        <select name="priority" value={form.priority} onChange={handleChange} required style={inputStyle}>
          <option value="">Select</option>
          {priorities.map((p) => (
            <option key={p} value={p}>{p}</option>
            ))}</select>
      </div>
    </div>

    <div style={{ flex: '2', margin: '0.5rem' }}>
      <label>Description</label>
      <textarea name="description" value={form.description} onChange={handleChange} required style={{...inputStyle,height: '140px',resize: 'vertical'}}/></div>
  </div>

  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
    <div>
      <MyFormComponent /> 
    </div>
    <button type="submit"style={{backgroundColor: '#42E6C2',border: 'none',borderRadius: '0.7em',padding: '0.6rem 2rem',fontSize: '1rem',cursor: 'pointer',color: '#000',boxShadow: '2px 2px 4px rgba(0,0,0,0.1)'}}>Submit</button>
  </div>

  {error && <div style={{ color: 'red', marginTop: '1rem' }}>{error}</div>}
</form>
    );
}