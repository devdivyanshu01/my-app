
import './signin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function SignUP(){
    const navigate = useNavigate();

    return(
        <>
        <div className="sign">
            <div className="container">
                <h1 style={{color:"black"}}>Helpdesk System</h1>
                <p style={{color:'black'}}>Sign up here</p>
                <div className="upper"><input className="user" type="text" placeholder="Username" pattern="[a-zA-z0-9_@./&$]" required  />
                <input className="pass" type="password" placeholder="Password" pattern="[a-zA-Z0-9_@!#$%^&*.]" required  />
                <input className='mail' type="mail" placeholder="Email" pattern="[a-zA-Z0-9@.]" required />
                <button className="btn" style={{backgroundcolor:"rgb(31, 90, 216)"}}>Sign UP</button></div>
                <div className="options">
                    <p style={{cursor:"pointer", color:"red"}} onClick={()=> navigate('/Acc/Forgot')}>Forgot Password?</p>
                    <p style={{cursor:"pointer", color:"black"}} onClick={()=> navigate('/Acc/SignIN')}>Sign In</p>
                </div>

            </div>
        </div>
        </>
    )
}
export default SignUP