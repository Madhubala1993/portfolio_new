import { useState } from "react";
import rental_portal from "./logos/rental_portal.png";
import rental_portal_color from "./logos/rental_portal_color.png";
import polymer_search from "./logos/aws-polymer.png";
import polymer_search_color from "./logos/aws-polymer_color.png";
import moviesapp from "./logos/moviesapp.png";
import moviesapp_color from "./logos/moviesapp_color.png";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import HoverImage from "react-hover-image";
import { KeyboardReturn } from "@mui/icons-material";

const projects = [
  {
    name: "Equipment Rental Portal",
    description:
      "An E-Commerce website for a Equipment renting, built with reactjs and mui. The products are fetched via an external API. The customers can rent products for some duration for any occasions like parties, marriage events, birthday functions, anniversaries etc. The site also has a lot of other great features like login/logout provided by auth, payment handling by Razorpay.",
    pic: rental_portal,
    color_pic: rental_portal_color,
    live_demo: "https://equipment-rental-portal-madhu2022.netlify.app/",
    source_code:
      "https://github.com/Madhubala1993/equipment-rental-portal-frontend",
  },
  {
    name: "AWS Polymer Search",
    description:
      "AWS Polymer Search is the place where we can Search and discover quality AWS repositories . The best AWS repositories with detailed attributes by category, tags, stars, contributors, and more. Leverage the best community work for your own projects and learning.",
    pic: polymer_search,
    color_pic: polymer_search_color,
    live_demo: "https://aws-polymersearch-by-madhu.netlify.app/",
    source_code:
      "https://github.com/Madhubala1993/polymer_search_client_Frontend",
  },
  {
    name: "Movies App",
    description:
      "This is a basic movies app where we can do CRD operations. This application includes, like and dislikes buttons, movie summary, trailers and we can able to edit a movie detail,create new movies and delete the movies. It also includes a fun game called Tic-Tac-Toe.",
    pic: moviesapp,
    color_pic: moviesapp_color,
    live_demo: "https://moviesapp-madhu2022.netlify.app/",
    source_code: "https://github.com/Madhubala1993/moviesapp",
  },
];

export function Projects() {
  const [projectPic, setProjectPic] = useState(true);
  console.log(projectPic);
  return (
    <div className="projects-container">
      <div className="projects-heading">
        <h1>My Works</h1>
      </div>
      <div className="project-cards">
        {projects.map(
          (
            { name, description, pic, color_pic, live_demo, source_code },
            index
          ) => {
            if (index === 1) {
              return (
                <Leftproject
                  name={name}
                  description={description}
                  pic={pic}
                  color_pic={color_pic}
                  live_demo={live_demo}
                  source_code={source_code}
                />
              );
            } else
              return (
                <Rightproject
                  name={name}
                  description={description}
                  pic={pic}
                  color_pic={color_pic}
                  live_demo={live_demo}
                  source_code={source_code}
                />
              );
          }
        )}
      </div>
    </div>
  );
}

function Rightproject({
  name,
  description,
  pic,
  color_pic,
  live_demo,
  source_code,
}) {
  console.log(pic);
  return (
    <div id="parent1">
      <HoverImage className="project-pic" src={color_pic} hoverSrc={pic} />
      <div id="child1">
        <h3 className="project-title">{name}</h3>
        <p className="project-content">{description}</p>
        <br />
        <div className="code-buttons">
          <Button color="inherit" onClick={() => window.open(live_demo)}>
            <span style={{ textDecoration: "underline" }}>Live Demo </span>
          </Button>
          <Button color="inherit" onClick={() => window.open(source_code)}>
            <GitHubIcon color="inherit" style={{ padding: "10px" }} /> Source
            code
          </Button>
        </div>
      </div>
    </div>
  );
}

function Leftproject({
  name,
  description,
  pic,
  color_pic,
  live_demo,
  source_code,
}) {
  return (
    <div id="parent2">
      <HoverImage className="project-pic" src={color_pic} hoverSrc={pic} />
      <div id="child2">
        <h3 className="project-title">{name}</h3>
        <p className="project-content">{description}</p>
        <br />
        <div className="code-buttons">
          <Button color="inherit" onClick={() => window.open(live_demo)}>
            <span style={{ textDecoration: "underline" }}>Live Demo </span>
          </Button>
          <Button color="inherit" onClick={() => window.open(source_code)}>
            <GitHubIcon color="inherit" style={{ padding: "10px" }} /> Source
            code
          </Button>
        </div>
      </div>
    </div>
  );
}
