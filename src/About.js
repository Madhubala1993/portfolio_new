import HTML from "./logos/html5.svg";
import CSS from "./logos/css3.svg";
import muilogo from "./logos/muilogo.png";
import reactlogo from "./logos/reactt.svg";
import heroku from "./logos/heroku.svg";
import aws from "./logos/AWS.png";
import express from "./logos/express.svg";
import bootstrap from "./logos/bootstrap.svg";
import javascript from "./logos/javascript.svg";
import mongo from "./logos/mongodb.svg";
import netlify from "./logos/netlify.png";
import node from "./logos/nodejs.svg";
import postman from "./logos/postman.png";
import vscode from "./logos/vscode.svg";

const logos = [
  { logo: reactlogo, name: "React" },
  { logo: javascript, name: "Javascript" },
  { logo: CSS, name: "CSS" },
  { logo: HTML, name: "HTML" },
  { logo: node, name: "Node" },
  { logo: heroku, name: "Heroku" },
  { logo: mongo, name: "MongoDB" },
  { logo: netlify, name: "Netlify" },
  { logo: express, name: "Express" },
  { logo: postman, name: "Postman" },
  { logo: vscode, name: "VScode" },
  { logo: muilogo, name: "MUI" },
  { logo: bootstrap, name: "Bootstrap" },
  { logo: aws, name: "AWS" },
];
export function About() {
  return (
    <div className="aboutme-container">
      <div className="aboutme-heading">
        <h1>ABOUT ME</h1>
      </div>
      <div className="aboutme-content">
        <p>
          I'm Madhubala, a Full Stack Developer. I mainly work with the MERN
          stack. I love creating Creative and Responsive web pages. I also have
          interests in working in challenging tasks and to learn new
          technologies.
        </p>

        <br />
        <p>Interests:</p>
        <li>Coding</li>
        <li>Designing</li>
        <li>Team Work</li>
        <li>Learning new things</li>
      </div>
      <div className="aboutme-heading">
        <h4>My Stack</h4>
      </div>

      <div className="softwares">
        {logos.map(({ logo, name }, index) => (
          <>
            <img className="logos" src={logo} alt={name} />
          </>
        ))}
      </div>
    </div>
  );
}
