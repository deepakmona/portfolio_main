import "../Components/Thirdpage.css";
import { GoLink } from "react-icons/go";
import { FaSquareGithub } from "react-icons/fa6";
import line from "../assets/Line-Design.svg";
import property from "../assets/propertyproject.png"
import cafe from "../assets/cafeproject.png"
import honasa from "../assets/honasaproject.png"


export default function Thirdpage() {
  return (
    <div>
      <div className="thirdpage">
        <img src={line} alt="error"/>
        <h2 id="head">Some Things I have Built</h2>

      <div className="firstprject">
      <div className="firsthalf"><img src={property} alt="error" /></div>
      <div className="firsthalf">
      <a href=""><FaSquareGithub id="git"/></a>
      <a href=""><GoLink id="link" /></a>
        <h5>Property Booking Project </h5>
        <p>Dreamproperty.</p>
        <div className="brifdes">
          <p>I built a modern social app with a stunning UI with a native mobile feel, a special tech stack, an infinite scroll feature, and amazing performance using React JS, Appwrite, JavaScript, and more.</p>
        </div>
        <div className="techlang">
          <button>react</button>
          <button>react</button>
          <button>react</button>
          <button>react</button>
        </div>
      </div>
      </div>



{/* this is second project code  */}
<img src={line} alt="error" />
<div className="firstprject">
      <div className="firsthalf"><img src={cafe} alt="error" /></div>
      <div className="firsthalf">
      <a href=""><FaSquareGithub id="git"/></a>
      <a href=""><GoLink id="link" /></a>
        <h5>Dreamcafe Booking Project </h5>
        <p>Dreamcafe</p>
        <div className="brifdes">
          <p>I built a modern social app with a stunning UI with a native mobile feel, a special tech stack, an infinite scroll feature, and amazing performance using React JS, Appwrite, JavaScript, and more.</p>
        </div>
        <div className="techlang">
          <button>react</button>
          <button>react</button>
          <button>react</button>
          <button>react</button>
        </div>
      </div>
      </div>


{/* this is third project code  */}
<img src={line} alt="error" />
<div className="firstprject">
      <div className="firsthalf"><img src={honasa} alt="error" /></div>
      <div className="firsthalf">
      <a href=""><FaSquareGithub id="git"/></a>
      <a href=""><GoLink id="link" /></a>
        <h5>Honasa Project </h5>
        <p>Honasa.</p>
        <div className="brifdes">
          <p>I built a modern social app with a stunning UI with a native mobile feel, a special tech stack, an infinite scroll feature, and amazing performance using React JS, Appwrite, JavaScript, and more.</p>
        </div>
        <div className="techlang">
          <button>react</button>
          <button>react</button>
          <button>react</button>
          <button>react</button>
        </div>
      </div>
      </div>


{/* this is Fourth project code  */}
<img src={line} alt="error" />
<div className="firstprject">
      <div className="firsthalf"><img src={honasa} alt="error" /></div>
      <div className="firsthalf">
      <a href=""><FaSquareGithub id="git"/></a>
      <a href=""><GoLink id="link" /></a>
        <h5>Jewwork. Project </h5>
        <p>Jewwork.</p>
        <div className="brifdes">
          <p>I built a modern social app with a stunning UI with a native mobile feel, a special tech stack, an infinite scroll feature, and amazing performance using React JS, Appwrite, JavaScript, and more.</p>
        </div>
        <div className="techlang">
          <button>react</button>
          <button>react</button>
          <button>react</button>
          <button>react</button>
        </div>
      </div>
      </div>


      </div>
    </div>
  )
}




