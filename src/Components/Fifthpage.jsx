import "../Components/Fifth.css";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Fifthpage() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7nga6vq', 'template_yc4e13e', form.current, {
        publicKey: 'cFochbQ771rQN3gwe',
      })
      .then(
        () => {
          alert('Thankyou for connect with me.Now you have sucessfully connected.');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
        );
        form.current.reset();
    };

  return (
    <div>
      
      <div className="loginpage">
        <h3>Connect with me here !</h3>
        <div className="contact">
            <p>Let us bridge the gap between opportunity and connection—reach out, and let us connect right here</p>

            <form ref={form} onSubmit={sendEmail} action="">
            <input type="text" name="user_name" id="name" placeholder="Enter your name here" /><br />
            <input type="email" name="user_email" id="email"  placeholder="Enter  your email address"/><br />
            <input type="number" name="number" id="number" placeholder="Enter your mobile number" /><br />
            <button type="submit" value="Send">Submit</button>
          
            </form>
          <div className="social">
          <FaGithub id="ic" size={45}/>
          <CiLinkedin id="ic" size={45}/>
          <BsTwitterX id="ic" size={45}/>
          <FaInstagram id="ic" size={45}/>
          <FaReddit id="ic" size={45}/>
          </div>


        </div>
      </div>

    </div>
  )
}
