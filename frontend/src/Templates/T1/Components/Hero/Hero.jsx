import "../../GlobalT1.css";
import Avatar from "../../Assets/profile.png";
import "./Hero.css";
import Pill from "../Pill/Pill";
import { useSelector } from "react-redux";

function Hero({
  name = "John Doe",
  role = "Software Developer",
  description = "A software developer with a passion for creating web applications. I have experience working with JavaScript, React, and Node.js. I am currently seeking new opportunities to grow my skills and contribute to a team.",
  email = "johndoe@mail.com",
  mobile = "+ 123-456-7890",
  linkedin = "https://linkedin.com/in/johndoe",
  github = "https://github.com/johndoe",
  resume = "https://resume.com",
}) {

  const formData = useSelector(s=>s.formData)

  return (
    <div className="hero">
      <div className="image">
        <div className="avatar">
          <img src={Avatar} alt="Avatar" />
        </div>
        <a href={resume} target="_blank" rel="noreferrer">
        <Pill content="View Résumé" color="invert" />
        </a>
      </div>

      <div className="hero-content">
        <div className="role">
          <Pill content={role} />
        </div>
        <div className="description">
          <h1>Hi, I'm {formData.basicInfo.name}</h1>
          <span>{description}</span>
        </div>
        <div className="links">
          <a target="_blank" rel="noreferrer" href={`mailto:${formData.basicInfo.email}`}><Pill content={formData.basicInfo.email} /></a>
          <a target="_blank" rel="noreferrer" href={`tel:${formData.basicInfo.phone}`}><Pill content={formData.basicInfo.phone} /></a>
          <a target="_blank" rel="noreferrer" href={linkedin}><Pill content="LinkedIn" /></a>
          <a target="_blank" rel="noreferrer" href={github}><Pill content="GitHub" /></a>
        </div>
      </div>
    </div>
  );
}

export default Hero;