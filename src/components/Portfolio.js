import akullabelkaPreview from "../assets/akulla-belka-preview.png";
import wearabologyPreview from "../assets/wearabology-preview.gif";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <h2 className="title">Portfolio</h2>
      <div className="project-div">
        <img
          src={akullabelkaPreview}
          alt="A preview of the AkullaBelka app"
          className="project-preview"
        />
        <div className="project-info">
          <h2 className="project-title">AkullaBelka</h2>
          <a
            href="https://akulla-belka.herokuapp.com/"
            rel="noreferrer"
            target="_blank"
          >
            DEMO
          </a>
          <p className="project-description">
            A small money-lending app that allows users to become borrowers
            and/or lenders in order to exchange money between them with a late
            payment tracker included. The technologies used are React.js,
            Node.js, Express, MongoDB, Styled Components and Cron. I was able to
            track the money throughout the app, applying Cron as a scheduler for
            late payments and implemented MongoDB for the first time in an app
            of this size.
          </p>
        </div>
      </div>
      <div className="project-div">
        <img
          src={wearabologyPreview}
          alt="A preview of the Wearabology app"
          className="project-preview"
        />
        <div className="project-info">
          <h2 className="project-title">Wearabology</h2>
          <a
            href="https://project-wearabology.herokuapp.com/"
            rel="noreferrer"
            target="_blank"
          >
            DEMO
          </a>
          <p className="project-description">
            An e-commerce app done for a team project which allows the user to
            select items, add items to a cart, checkout and receive a
            confirmation. I was in charge of the Back-End for the project and
            made sure to provide the Front-End with all the data necessary
            through the proper routes to be able to connect to Redux. Also,
            tested React Spring in the Error Page. With this project, I was able
            to greatly improve my BE skills in a short time.
          </p>
        </div>
      </div>
      <div className="project-div">
        <p className="project-coming-soon">MORE TO COME!</p>
      </div>
    </div>
  );
};
export default Portfolio;
