import "../Components/Fifth.css";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";


export default function Fifthpage() {
  return (
    <div>
      
      <div className="loginpage">
        <h3>Connect with me here !</h3>
        <div className="contact">
            <p>Let us bridge the gap between opportunity and connection—reach out, and let us connect right here</p>

            <form action="">
            <input type="text" name="name" id="name" placeholder="Enter your name here" /><br />
            <input type="email" name="email" id="email"  placeholder="Enter  your email address"/><br />
            <input type="number" name="number" id="number" placeholder="Enter your mobile number" /><br />
            <button type="submit">Submit</button>
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
