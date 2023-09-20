import { StyledLogin } from "./style";
import { useRef, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, RecaptchaVerifier , signInWithPhoneNumber} from "firebase/auth";
import { useEffect } from "react";


const firebaseConfig = {
    apiKey: "AIzaSyCMwjXIpuRcTtB8n4UFiRuKzp2jkjXXPK8",
    authDomain: "age-courses.firebaseapp.com",
    projectId: "age-courses",
    storageBucket: "age-courses.appspot.com",
    messagingSenderId: "426403955844",
    appId: "1:426403955844:web:72dc1c52613715f63deed1",
    measurementId: "G-8M4WRXKF2N"
  };

  const app = initializeApp(firebaseConfig);
 getAnalytics(app);

  const auth = getAuth();

  




const Login = () => {

    const [title,setTitle] = useState("Login or SignUp");


    useEffect(()=>{
        document.querySelector(".input-container input").focus();
    },[])
    


    const [flag,setFlag] = useState(false);
    
    return ( <StyledLogin className="login-wraped flex-class">
        <div className="shade"></div>
        <div onClick={(e)=>{
            if(!e.target.classList.contains("input-container")){
                document.querySelector(".btn").style.backgroundColor = '#eceff3';
                document.querySelector(".btn").style.color = '#44444460';
                document.querySelector(".input-container input").value = "";
            }
        }} className="login flex-class">
            <p className="cross" onClick={()=>{
                document.querySelector(".login-wraped").style.right="-120%";
            }}>&#xd7;</p>
            <div className="wrap">
            <p className="title">{title}</p>
            <div onClick={(e)=>{
                document.querySelector(".input-container input").focus();
            }} className="input-container flex-class">
                <p className="lable">Mobile Number</p>
                <input id="phone_number" maxLength="10" onChange={(e)=>{
                    if (e.target.value.length > e.target.maxLength){ e.target.value = e.target.value.slice(0, e.target.maxLength);}
                    if((!flag && e.target.value.length==10) || (flag && e.target.value.length==6)){
                        document.querySelector(".btn").style.backgroundColor = '#4f44e0';
                        document.querySelector(".btn").style.cursor = 'pointer';
                        document.querySelector(".btn").style.color = '#fff';
                    }else{
                        document.querySelector(".btn").style.backgroundColor = '#eceff3';
                        document.querySelector(".btn").style.cursor = 'default';
                        document.querySelector(".btn").style.color = '#44444460';
                    }
                }} type="number" />
            </div>
            <button id="sign-in-button"
            
                onClick={()=>{
                    const btn = document.querySelector(".btn");
                    const color = btn.style.backgroundColor;
                    if(color == "rgb(79, 68, 224)"){
                        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
                            'size': 'invisible',
                            'callback': (response) => {
                            }
                            }, auth);
                            const appVerifier = window.recaptchaVerifier;

                        if(flag==false){
                            btn.innerText = "Loading..."
                            document.querySelector(".input-container p").innerText = 'Loading';
                            const phoneNumber = document.querySelector(".input-container input").value;
                            setTitle("Loading...")
                            signInWithPhoneNumber(auth, "+91"+phoneNumber, appVerifier)
                            .then((confirmationResult) => {
                              // SMS sent. Prompt user to type the code from the message, then sign the
                              // user in with confirmationResult.confirm(code).
                              window.confirmationResult = confirmationResult;
                              document.querySelector(".input-container input").value = "";
                              document.querySelector(".input-container input").focus();
                              document.querySelector(".input-container p").innerText = 'Enter OTP sent to ' +phoneNumber;
                                btn.innerText = "Submit";
                                setFlag(true);
                                setTitle("Enter OTP")
                              // ...
                            }).catch((error) => {
                                console.log(error)
                                setTitle("Login or Sign Up")
                                setTitle("Something went wrong. Please enter phone number again");
                                btn.innerText = "Send OTP"
                                document.querySelector(".input-container p").innerText = 'Mobile Number';    
                              // Error; SMS not sent
                              // ...
                            });
                        }

                        if(flag == true){
                            const otp = document.querySelector(".input-container input").value;
                            btn.innerText = "Loading..."
                            setTitle("Loading...")
                            document.querySelector(".input-container p").innerText = 'Loading';
                            window.confirmationResult.confirm(otp).then((result) => {
                                // User signed in successfully.
                                document.querySelector(".login-wraped").style.right="-120%";
                                window.location.replace("/bond.html");
                                // ...
                              }).catch((error) => {
                                // User couldn't sign in (bad verification code?)
                                // ...
                                setTitle("Something went wrong. Please enter OTP again");
                                btn.innerText = "Submit";
                                setTitle("Enter OTP")
                                document.querySelector(".input-container p").innerText = 'Enter OTP sent to';    
                                
                                



                              });
                        }
                    
                    
                    }


                    // const phoneNumberInput = document.getElementById('phone_number');
                    
                }
            }
                
            className="btn disable">Send OTP</button>
            <p className="note">Note: You have to enter both otps sent on email and phone. So make sure you have your phone as well as email with you.</p>
            </div>
        </div>
    </StyledLogin> );
}
 
export default Login;