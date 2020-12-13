import "./App.css";
import htmlLogo from "./assets/html-logo.png";
import cssLogo from "./assets/css-logo.png";
import jsLogo from "./assets/js-logo.png";
import nodejsLogo from "./assets/nodejs-logo.png";
import expressLogo from "./assets/express-logo.png";
import reactLogo from "./assets/react-logo.png";
import reduxLogo from "./assets/redux-logo.png";
import mongodbLogo from "./assets/mongodb-logo.png";
import gitLogo from "./assets/git-logo.png";

function App() {
  return (
    <>
      <header>
        <a href="#home" className="nav-bar home">
          Ivan Escalante
        </a>
        <nav className="nav-bar">
          <ul className="nav-bar menu">
            <li className="nav-bar links">
              <a href="#about">About</a>
            </li>
            <li className="nav-bar links">
              <a href="#tech-stack">Tech Stack</a>
            </li>
            <li className="nav-bar links">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-bar links">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <div id="home" className="landing-page">
        <h1 className="intro name">Hi, I'm Ivan</h1>
        <h2 className="intro job">I am a Full-Stack Web Developer</h2>
      </div>
      <div id="about" className="about">
        <h2 className="title">About</h2>
        <section className="bio">
          <div className="avatar"></div>
          <p>
            Born and raised in Montreal, Canada. Since I was a little kid, I was
            fascinated by technology and games, also martial arts! During my
            teenage years, I had given coding a shot (HTML and CSS) but
            abandoned pretty quickly when I saw that I was out of ideas and
            didn't understand (lack of patience at that age :P). Life went on
            and I decided to go towards Science (Biochemistry in particular).
          </p>
          <p>
            After graduating in 2014 with a BSc. in Honors Biochemistry, I came
            out of university ready to face the world! 5 years in, after going
            through several jobs, I was left lacking something, that feeling
            that I wasn't able to accomplish anything in my professional life.
            By the end of 2019, I saw a bootcamp program given by Concordia and
            took a leap of faith. From March 2020 to November 2020, I went
            through the trenches and graduated as a Full-Stack Web Developer,
            one of my most proudest moments in my life!
          </p>
          <p>
            Like I had mentioned before, I've been passionate about martial arts
            since I was a child and went to study Karate, Aikido, Boxing and
            finally Ving Tsun Kung Fu. I was able to compete internationally in
            China in 2018 with Team Canada for the World Wing Chun Competition.
          </p>
          <p>
            You can also find me riding a bicycle during riding season and more
            recently, I took up my motorcycle license to be able to ride
            motorcycles as a newly-found hobby. Finally, I love Japan and its
            culture. I was able to visit twice and always came back home wanting
            more of it!
          </p>
          <p>
            Currently, I am trying to apply my newly acquired skills into
            challenging projects within a company and also keep growing/learning
            many more interesting things in the industry. With the current stack
            that I know, I want to keep building projects that will refine these
            skills but any other language/framework/library is welcomed!
          </p>
        </section>
      </div>
      <div id="tech-stack" className="tech-stack">
        <h2 className="title">Tech Stack</h2>
        <section className="tech-list">
          <div className="tech-div">
            <img src={htmlLogo} className="tech" />
            <p>HTML</p>
          </div>
          <div className="tech-div">
            <img src={cssLogo} className="tech" />
            <p>CSS</p>
          </div>
          <div className="tech-div">
            <img src={jsLogo} className="tech" />
            <p>Javascript</p>
          </div>
          <div className="tech-div">
            <img src={nodejsLogo} className="tech" />
            <p>Node.js</p>
          </div>
          <div className="tech-div">
            <img src={expressLogo} className="tech" />
            <p>Express</p>
          </div>
          <div className="tech-div">
            <img src={reactLogo} className="tech" />
            <p>React</p>
          </div>
          <div className="tech-div">
            <img src={reduxLogo} className="tech" />
            <p>Redux</p>
          </div>
          <div className="tech-div">
            <img src={mongodbLogo} className="tech" />
            <p>MongoDB</p>
          </div>
          <div className="tech-div">
            <img src={gitLogo} className="tech" />
            <p>Git</p>
          </div>
        </section>
      </div>
      <div id="portfolio" className="portfolio">
        <h2 className="title">Portfolio</h2>
        <div className="akulla-belka"></div>
        <div className="wearabology"></div>
      </div>
      <div id="contact" className="contact">
        <h2 className="title">Contact</h2>
        <p>blah blah bla</p>
        <p>Ivan Escalante © 2020 </p>
      </div>
    </>
  );
}

export default App;
