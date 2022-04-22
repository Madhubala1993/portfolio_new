import Typical from "react-typical";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button } from "@mui/material";

export function Homepage() {
  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <div className="name-container">
          <Typical steps={["Hi, I'm Madhubala"]} />
        </div>
        <p className="content-container">
          <span style={{ fontSize: "25px" }}> Full Stack Developer</span>
          <br /> I was an Electronics Engineer and for a healthy career growth I
          chose myself as Full Stack Developer. I love creating Creative and
          Responsive web pages. I mainly work with the MERN stack.
        </p>
        <div className="media-icon">
          <GitHubIcon
            sx={{ fontSize: "40px" }}
            variant="outlined"
            color="info"
            onClick={() => window.open(`https://github.com/Madhubala1993`)}
          />

          <LinkedInIcon
            sx={{ fontSize: "40px" }}
            variant="outlined"
            color="info"
            onClick={() =>
              window.open(
                `https://www.linkedin.com/in/madhubala-sarankumar-07707379/`
              )
            }
          />
        </div>
        <div className="resume">
          <a
            href="https://drive.google.com/file/d/1gy0_0VjpSSVxBo3l_AGgPvV5tu1O80DF/view?usp=sharing"
            download="Madhubala resume.pdf"
          >
            <Button variant="contained">Get Resume</Button>
            {/* <button className="btn"></button> */}
          </a>
        </div>
      </div>
      <div className="profile-picture">
        <div className="profile-picture-background"></div>
      </div>
    </div>
  );
}
