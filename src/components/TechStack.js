import htmlLogo from "../assets/html-logo.png";
import cssLogo from "../assets/css-logo.png";
import jsLogo from "../assets/js-logo.png";
import nodejsLogo from "../assets/nodejs-logo.png";
import expressLogo from "../assets/express-logo.png";
import reactLogo from "../assets/react-logo.png";
import reduxLogo from "../assets/redux-logo.png";
import mongodbLogo from "../assets/mongodb-logo.png";
import gitLogo from "../assets/git-logo.png";
const TechStack = () => {
  return (
    <div id="tech-stack" className="tech-stack">
      <h2 className="title">Tech Stack</h2>
      <section className="tech-list">
        <div className="tech-div">
          <img src={htmlLogo} className="tech" alt="HTML logo" />
          <p>HTML</p>
        </div>
        <div className="tech-div">
          <img src={cssLogo} className="tech" alt="CSS logo" />
          <p>CSS</p>
        </div>
        <div className="tech-div">
          <img src={jsLogo} className="tech" alt="Javascript logo" />
          <p>Javascript</p>
        </div>
        <div className="tech-div">
          <img src={nodejsLogo} className="tech" alt="Node.js logo" />
          <p>Node.js</p>
        </div>
        <div className="tech-div">
          <div className="tech-bg">
            <img src={expressLogo} className="tech" alt="Express logo" />
          </div>
          <p>Express</p>
        </div>
        <div className="tech-div">
          <img src={reactLogo} className="tech" alt="React logo" />
          <p>React</p>
        </div>
        <div className="tech-div">
          <img src={reduxLogo} className="tech" alt="Redux logo" />
          <p>Redux</p>
        </div>
        <div className="tech-div">
          <div className="tech-bg">
            <img src={mongodbLogo} className="tech" alt="MongoDb logo" />
          </div>
          <p>MongoDB</p>
        </div>
        <div className="tech-div">
          <img src={gitLogo} className="tech" alt="Git logo" />
          <p>Git</p>
        </div>
      </section>
    </div>
  );
};
export default TechStack;
