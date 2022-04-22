import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export function Contact() {
  return (
    <div className="contact-container">
      <div className="contactme-heading">
        <h1>Get In Touch</h1>
      </div>
      <div className="contactme-body">
        <img
          className="pic"
          src="https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?w=826&t=st=1648232645~exp=1648233245~hmac=db8b7b0bef9a3533d6945292e9380d2b0a5934431a76f6d52f9d251de2389602"
        />
        <div className="contactme-box">
          <p className="contactme-title">
            Expecting the call for my great career
          </p>
          <div className="contactme-content">
            <p> Phone : +91 86829 41882 </p>
            <p> Email : madhu.a1993@gmail.com</p>
            <p> Location : Coimbatore, Tamilnadu</p>
            <p className="links" style={{ alignItems: "center" }}>
              <GitHubIcon
                variant="outlined"
                color="info"
                style={{ padding: "10px" }}
              />
              <span
                onClick={() => window.open(`https://github.com/Madhubala1993`)}
                className="link"
              >
                Github
              </span>
            </p>
            <p className="links">
              <LinkedInIcon
                variant="outlined"
                color="info"
                style={{ padding: "10px" }}
              />
              <span
                onClick={() =>
                  window.open(
                    `https://www.linkedin.com/in/madhubala-sarankumar-07707379/`
                  )
                }
                className="link"
              >
                LinkedIn
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export function Footer() {
  return (
    <div className="footer-container">
      <p>Copyright © 2022. All Rights Reserved.</p>
      <p>Created by Madhubala</p>
    </div>
  );
}
