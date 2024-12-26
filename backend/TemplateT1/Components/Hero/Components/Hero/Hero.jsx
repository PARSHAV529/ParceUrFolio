import Avatar from "../../Assets/profile.png";
import Pill from "../Pill/Pill";
import { useSelector } from "react-redux";

function Hero({
  name = "John Doe",
  role = "Software Developer",
  description = "A software developer with a passion for creating web applications. I have experience working with JavaScript, React, and Node.js. I am currently seeking new opportunities to grow my skills and contribute to a team.",
  linkedin = "https://linkedin.com/in/johndoe",
  github = "https://github.com/johndoe",
  resume = "https://resume.com",
}) {
  const formData = useSelector((s) => s.formData);
  const selectedTheme = useSelector((state) => state.theme.selectedTheme);
  const theme = useSelector((state) => state.theme.themes[selectedTheme]);

  return (
    <div
      className={`flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 px-4 py-10 md:h-[90vh] ${theme.backgroundColor}`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-36 h-36 md:w-72 md:h-72 border rounded-full overflow-hidden">
          <img
            src={formData.basicInfo.profileImage || Avatar}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="mt-2"
        >
          <Pill content="View Résumé" color={theme.buttonColor || "invert"} />
        </a>
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
        <div>
          <Pill content={formData.basicInfo.jobTitle || role} theme={theme} />
        </div>
        <div>
          <h1 className={`text-2xl md:text-4xl font-bold ${theme.textColor}`}>
            Hi, I'm {formData.basicInfo.name || name}
          </h1>
          <p className={`text-lg md:text-xl mt-2 ${theme.textColor}`}>
            {description}
          </p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
          <a
            href={`mailto:${formData.basicInfo.email}`}
            target="_blank"
            rel="noreferrer"
          >
            <Pill content={formData.basicInfo.email} theme={theme} />
          </a>
          <a
            href={`tel:${formData.basicInfo.phone}`}
            target="_blank"
            rel="noreferrer"
          >
            <Pill content={formData.basicInfo.phone} theme={theme} />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Pill content="LinkedIn" theme={theme} />
          </a>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            <Pill content="GitHub" theme={theme} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
