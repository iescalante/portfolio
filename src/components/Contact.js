import twitterLogo from "../assets/twitter-logo.png";
import linkedinLogo from "../assets/linkedin-logo.png";
import githubLogo from "../assets/github-logo.png";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h2 className="title">Contact</h2>
      <section className="social-media-list">
        <div className="social-media">
          <a href="https://twitter.com/IvanEnriqueEC">
            <img src={twitterLogo} className="media-logo" alt="Twitter logo" />
          </a>
        </div>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/ivan-enrique-escalante-cornejo/">
            <img
              src={linkedinLogo}
              className="media-logo"
              alt="LinkedIn logo"
            />
          </a>
        </div>
        <div className="social-media">
          <a href="https://www.github.com/iescalante">
            <img src={githubLogo} className="media-logo" alt="Github logo" />
          </a>
        </div>
      </section>
    </div>
  );
};
export default Contact;
