import React, {useState} from 'react'
import "../styles/LoginPage.css"
import {auth} from "../firebase"
import { Link, useHistory } from 'react-router-dom'
function LoginPage() {
    const [isChecked, setIsChecked] = useState(false);
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');;
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then(auth => {
            history.push('/');
        }).catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then((auth) => {
            //it successfully created a new user with given email and password
            if(auth){
                history.push('/userInfo');
            }
        }).catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <div className="company__logo">
               <Link to= "/">
                 <img className="login__logo" src="https://i.pinimg.com/originals/57/ed/3b/57ed3b5c113d60d1fa0eced7e2e37357.png" />
               </Link>

              <h1>Anime | STUDIO</h1>
            </div>
        
          <div className="login__container">
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type={ isChecked ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} />
                <small className="login__showPassword">
                  <input type="checkbox" onClick={() => setIsChecked(!isChecked)} style={{marginRight:"5px",marginBottom:"3px"}}/>
                  Show Password
                  </small>
                <button type="submit" className="login__signInButton" onClick={signIn}>Sign In</button>
            </form>
            <p>
                By signing-in your agree to the Anime-Studio's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button onClick={register} className="login__registerButton">Create your Anime-Studio account</button>
        </div>
    </div>
    )
}

export default LoginPage
