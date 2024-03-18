import './Secondpage.css';
import newpic from '../assets/pic1.jpg'
import line from "../assets/Line-Design.svg";

export default function Secondpage() {
  return (
    <div>
      <div className="secondpage">
      <img id='line' src={line} alt="error"/>
        <h2 id='about'>@About Me !</h2>

        <div className="secondpercent">
            <div id='smallpic' className="halfofsecond"><div className="smallpic"><img src={newpic} alt="" /></div>
            </div>

            <div className="halfofsecond">
              <p>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, Bootstrap, JavaScript, React and Aos. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques.</p>

              <p>am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>

            <p>Here are a few technologies I’ve been working with recently:</p>

            <div className="techlang">
              <button>hello you</button>
              <button>hello you</button>
              <button>hello you</button>
              <button>hello you</button>
              <button>hello you</button>
              <button>hello you</button>
            </div>


            </div>
            
        </div>
      </div>

    </div>
  )
}
