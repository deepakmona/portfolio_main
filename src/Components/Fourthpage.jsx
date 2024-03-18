import "../Components/Fourthpage.css";
import { GoLink } from "react-icons/go";
import { FaSquareGithub } from "react-icons/fa6";
import line from "../assets/Line-Design.svg"
import {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';



export default function Fourthpage() {

    useEffect(()=>{
        Aos.init({duration:2000})
      },[])

	return (
		<div>
			<div className="fourthpage">
				<h2 id="headoffourth">Other Noteworthy Projects</h2>
				<div className="percentfourth">
					<div data-aos="flip-right" className="cardof"> 
                        <a href=""><FaSquareGithub id="git"/></a>
                        <a href=""><GoLink id="link" /></a>
                        <h3>Clone name</h3>
                        <p>Crafted using HTML, CSS, and JavaScript DOM, it fetches your GitHub data via API, presenting a clean showcase of repositories.</p>
                        <p>HTML  CSS  JavaScript  Github API</p>

                         </div>
                   
                    <div data-aos="flip-right" className="cardof"> 
                    <a href=""><FaSquareGithub id="git"/></a>
                    <a href=""><GoLink id="link" /></a>
                    <h3>Clone name</h3>
                        <p>Crafted using HTML, CSS, and JavaScript DOM, it fetches your GitHub data via API, presenting a clean showcase of repositories.</p>
                        <p>HTML  CSS  JavaScript  Github API</p>

                         </div>
                  
                    <div data-aos="flip-right" className="cardof"> 
                    <a href=""><FaSquareGithub id="git"/></a>
                    <a href=""><GoLink id="link" /></a>
                    <h3>Clone name</h3>
                        <p>Crafted using HTML, CSS, and JavaScript DOM, it fetches your GitHub data via API, presenting a clean showcase of repositories.</p>
                        <p>HTML  CSS  JavaScript  Github API</p>
                        </div>
                   
                    <div data-aos="flip-right" className="cardof"> 
                    <a href=""><FaSquareGithub id="git"/></a>
                    <a href=""><GoLink id="link" /></a>
                    <h3>Clone name</h3>
                        <p>Crafted using HTML, CSS, and JavaScript DOM, it fetches your GitHub data via API, presenting a clean showcase of repositories.</p>
                        <p>HTML  CSS  JavaScript  Github API</p>
                            </div>
                    <div data-aos="flip-right" className="cardof"> 
                    <a href=""><FaSquareGithub id="git"/></a>
                    <a href=""><GoLink id="link" /></a>
                         <h3>Clone name</h3>
                        <p>Crafted using HTML, CSS, and JavaScript DOM, it fetches your GitHub data via API, presenting a clean showcase of repositories.</p>
                        <p>HTML  CSS  JavaScript  Github API</p>
                            </div>
                    <div data-aos="flip-right" className="cardof"> 
                    <a href=""><FaSquareGithub id="git"/></a>
                    <a href=""><GoLink id="link" /></a>
                         <h3>Clone name</h3>
                        <p>Crafted using HTML, CSS, and JavaScript DOM, it fetches your GitHub data via API, presenting a clean showcase of repositories.</p>
                        <p>HTML  CSS  JavaScript  Github API</p>
                            </div>

                     <img src={line} alt="error" />
				</div>
			</div>
		</div>
	);
}
