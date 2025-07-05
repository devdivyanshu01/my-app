
import './forgot.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Forgot(){


    return(
        <>
        <div className="sign">
            <div className="container" style={{height:"400px"}}>
                <p style={{color: 'black', maxWidth: "380px", margin: '0 auto', textAlign: 'center'}}>Don’t worry, Enter your email below and we will send you a link to change password.</p>
                <div className="upper"><input className='mail' type="mail" placeholder="Email" pattern="[a-zA-Z0-9@.]" required style={{marginTop:"50px", marginBottom:"40px"}}/>
                <button className="btn" style={{backgroundColor:"rgb(95, 255, 47)", marginBottom:"20px"}}>Submit</button>
                <button className="btn" style={{backgroundColor:"rgb(35, 87, 200)"}}>Sign UP</button></div>


            </div>
        </div>
        </>
    )
}
export default Forgot