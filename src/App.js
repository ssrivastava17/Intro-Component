// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { getValue } from '@testing-library/user-event/dist/utils';
import errorLogo from './images/icon-error.svg';

function App() {
  // javascript
  const [fname, setFName] = useState(""); // hook - updates input field/data
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [myErrorFNAME,setMyErrorFName ]= useState(false); // updates error message
  const [myErrorLNAME,setMyErrorLName ]= useState(false);
  const [myErrorEmail,setMyErrorEmail ]= useState(false);
  const [myErrorPassword,setMyErrorPassword ]= useState(false);

  function submitForm(e){
    e.preventDefault(); // preventDefault is a method, don't want page to refresh
    console.log("Clicking");
    console.log(typeof(e.target[2].value));
    
    // FIRST NAME
    if(fname.length < 1){
      setMyErrorFName(true);
    }else{ setMyErrorFName(false);}

    // LAST NAME
    if(lname.length < 1){
      setMyErrorLName(true);
    }else{ setMyErrorLName(false);}


    // EMAIL
    // console.log(email);
    console.log(e.target[2].value)
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target[2].value)){
      console.log('false - no error'); 
      setMyErrorEmail(false);
    }else{ setEmail(""); setMyErrorEmail(true);}

    // PASSWORD
    if(password.length < 1){
      setMyErrorPassword(true);
    }else{ setMyErrorPassword(false);}

  }


  // template/html
  return ( // returning JSX - returning template/view
    <div className="App">
      <header className="App-background">
        <div className="leftSide">
          <h1>Learn to code by watching others</h1>

          <p>See how experienced developers solve problems in real-time. </p>
          <p>Watching scripted tutorials is great, but understanding how </p>
          <p>developers think is invaluable. </p>

        </div>

        <div className="rightSide">
          <p className="rightHeader"><span className="bolded">Try it free 7 days </span> then $20/mo. therafter </p>
          <div className="rightInfo">
            <div className="rightSideCard">
              <form action="" method="" id="signup" onSubmit={submitForm}>
                {/* FIRST NAME */}
                <div className="field">
                    <input type='text' className={myErrorFNAME ? "defaultHidden":null} value={fname} id='fname' name='fname' placeholder='First Name' onChange={(e) => setFName(e.target.value) }/>
                    <img className={myErrorFNAME ? null : "hidden"} src={errorLogo}/>
                    <p className="small">{myErrorFNAME ? "First Name cannot be empty" : null}</p>
                </div>

                {/* LAST NAME */}
                <div className="field">
                    <input type='text' className={myErrorLNAME ? "defaultHidden":null} value={lname} id='lname' name='lname' placeholder='Last Name' onChange={(e) => setLName(e.target.value)}/>
                    <img className={myErrorLNAME ? null : "hidden"} src={errorLogo}/>
                    <p className="small">{myErrorLNAME ? "Last Name cannot be empty" : null}</p>
                </div>

                {/* EMAIL */}
                <div className="field">
                    <input type='text' className={myErrorEmail ? "emailHidden":null} value={email} id='email' name='email' placeholder={myErrorEmail ? "email@example/com":"Email"} onChange={(e) => setEmail(e.target.value)}/>
                    <img className={myErrorEmail ? null : "hidden"} src={errorLogo}/>
                    <p className="small">{myErrorEmail ? "Looks like this is not an email" : null}</p>
                </div>

                {/* PASSWORD */}
                <div className="field">
                    <input type='text' className={myErrorPassword ? "defaultHidden":null} value={password} id='password' name='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                    <img className={myErrorPassword ? null : "hidden"} src={errorLogo}/>
                    <p className="small">{myErrorPassword ? "Password cannot be empty" : null}</p>
                </div>
                <div className='field'>
                    <button className="freeButt" 
                            type='submit'>
                      CLAIM YOUR FREE TRIAL</button>
                </div>
              </form>

              <p className="terms">By clicking the button, you are agreeing to our <span className="boldColor">Terms and Services</span></p>
            </div>
          
          </div>
        </div>
      </header>
        <footer>
          <p className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="https://github.com/ssrivastava17">Stephanie Srivastava</a>.
          </p>
        </footer>

    </div>
  );
}

export default App;



