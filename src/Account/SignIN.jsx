import './signin.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignIN() {
  const navigate = useNavigate();

  return (
    <div className="sign">
      <div className="container" style={{height:"400px"}}>
        <h1 style={{ color: 'black' }}>Helpdesk System</h1>
        <div className="upper">
          <input className="user" type="text" placeholder="Username" pattern="[a-zA-Z0-9_@./&$]*" required/>
          <input className="pass" type="password" placeholder="Password" pattern="[a-zA-Z0-9_@!#$%^&*.]*" required/>
          <button className="btn">Sign in</button>
        </div>
        <div className="options">
          <p style={{ cursor: 'pointer', color: 'red' }} onClick={()=> navigate('/Account/Forgot')}>Forgot Password?</p>
          <p style={{ cursor: 'pointer', color: 'black' }} onClick={() => navigate('/Account/SignUP')}>Sign Up</p>
        </div>
      </div>
    </div>
  );
}

export default SignIN;