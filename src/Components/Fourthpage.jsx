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
                        <a href="https://github.com/deepakmona"><FaSquareGithub id="git"/></a>
                        <a href="https://deepakmona.github.io/A-rtel_clone/"><GoLink id="link" /></a>
                        <h3>Airtel Clone</h3>
                        <p>Crafted using HTML, CSS, and JavaScript DOM, it fetches your GitHub data via API, presenting a clean showcase of repositories.</p>
                        <p>HTML  CSS  JavaScript  Github API</p>

                         </div>
                   
                    <div data-aos="flip-right" className="cardof"> 
                    <a href="https://github.com/deepakmona"><FaSquareGithub id="git"/></a>
                    <a href="https://bookyourtrip-apxmcogg4-deeps-projects-ee632b09.vercel.app/"><GoLink id="link" /></a>
                    <h3>TripBooking</h3>
                        <p>Crafted using HTML, CSS, and JavaScript DOM, it fetches your GitHub data via API, presenting a clean showcase of repositories.</p>
                        <p>HTML  CSS  JavaScript  Github API</p>

                         </div>
                  
                    <div data-aos="flip-right" className="cardof"> 
                    <a href="https://github.com/deepakmona"><FaSquareGithub id="git"/></a>
                    <a href="https://admin-hmilib86p-deeps-projects-ee632b09.vercel.app/"><GoLink id="link" /></a>
                    <h3>Admin Panel</h3>
                        <p>Crafted using HTML, CSS, and JavaScript DOM, it fetches your GitHub data via API, presenting a clean showcase of repositories.</p>
                        <p>HTML  CSS  JavaScript  Github API</p>
                        </div>
                   
                    <div data-aos="flip-right" className="cardof"> 
                    <a href="https://github.com/deepakmona"><FaSquareGithub id="git"/></a>
                    <a href="https://deepakmona.github.io/H_clone/"><GoLink id="link" /></a>
                    <h3> Honasa Clone </h3>
                        <p>Crafted using HTML, CSS, and JavaScript DOM, it fetches your GitHub data via API, presenting a clean showcase of repositories.</p>
                        <p>HTML  CSS  JavaScript  Github API</p>
                            </div>
                    <div data-aos="flip-right" className="cardof"> 
                    <a href="https://github.com/deepakmona"><FaSquareGithub id="git"/></a>
                    <a href=""><GoLink id="link" /></a>
                         <h3>Clone Name</h3>
                        <p>Crafted using HTML, CSS, and JavaScript DOM, it fetches your GitHub data via API, presenting a clean showcase of repositories.</p>
                        <p>HTML  CSS  JavaScript  Github API</p>
                            </div>
                    <div data-aos="flip-right" className="cardof"> 
                    <a href="https://github.com/deepakmona"><FaSquareGithub id="git"/></a>
                    <a href=""><GoLink id="link" /></a>
                         <h3>Clone Name</h3>
                        <p>Crafted using HTML, CSS, and JavaScript DOM, it fetches your GitHub data via API, presenting a clean showcase of repositories.</p>
                        <p>HTML  CSS  JavaScript  Github API</p>
                            </div>

                     <img src={line} alt="error" />
				</div>
			</div>
		</div>
	);
}
