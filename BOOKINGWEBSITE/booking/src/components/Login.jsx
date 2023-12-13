
import  "./Login.css";
import { Link } from 'react-router-dom'
const Login=()=> {
    return (
          <div className="cols">
           
            <div className="container">
                <h1>VIN bookings</h1><br/>
                <form class="register">
                    <h2>LOGIN</h2>
                    <label class="lab"><b>EmailId:</b></label>
                    <input id="email" type="email" placeholder="EmailId" required/><br/><br/>
                    <label class="lab"><b>Password:</b></label>
                    <input id="pass" type="password" placeholder="password" required/><br/><br/>
                    <input id="but" type="submit" value="Login"/><br/>
                    <b>Don't have an account?</b><br/>
                    <Link className='log' to='/log'>Register</Link>
                </form>
            </div>
        </div>  
    )
  }
export default Login