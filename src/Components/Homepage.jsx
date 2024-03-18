import './Homepage.css';
import mypic from '../assets/myimg.jpg'

export default function Homepage() {
  return (
    <div>
      <div className="homepage">
      <div className="percent">
      <div className="halfofmain">
        <p id='firstp'>Hi, my name is</p>
        <h1>Deepak Kumar</h1>
        <h1>Front-End React</h1>
        <h1>Developer</h1>
        <p id='secondp'>I am a passionate front-end developer specialized in building exceptional web apps from Jhunjhunu Rajasthan, India 📍</p>
        <button><a href="">Get in touch !</a></button>
        
      </div>

      <div className="halfofmain">
        <img id='profile-pic' src={mypic} alt=""/>
      </div>

      </div>

      </div>  
      
    </div>
  )
}
