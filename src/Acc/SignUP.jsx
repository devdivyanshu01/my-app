import './signin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function SignUP() {
  const navigate = useNavigate();

  return (
    <div className="sign">
      <div className="container">
        <h1 style={{ color: "black" }}>Helpdesk System</h1>
        <p style={{ color: 'black' }}>Sign up here</p>
        <div className="upper">
          <input className="user" type="text" placeholder="Username" required />
          <input className="pass" type="password" placeholder="Password" required />
          <input className='mail' type="email" placeholder="Email" required />
          <button className="btn" style={{ backgroundColor: "rgb(31, 90, 216)" }}>Sign UP</button>
        </div>
        <div className="options">
          <p style={{ cursor: "pointer", color: "red" }} onClick={() => navigate('/Forgot')}>Forgot Password?</p>
          <p style={{ cursor: "pointer", color: "black" }} onClick={() => navigate('/SignIN')}>Sign In</p>
        </div>
      </div>
    </div>
  );
}

export default SignUP;
