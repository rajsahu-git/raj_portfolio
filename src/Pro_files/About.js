import NavBar from "./NavBar";
import Rajsahu from "../assets/images/rajsahu.png";
import "./About.css";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <NavBar />
      <div className="about-heading">
        <h1>About Me</h1>
      </div>
      <div className="about">
        
        <div className="image">
          <img src={Rajsahu} alt="" />
        </div>
        <article className="aboutMe">
          <h4>My Name Is Raj Kumar Sahu.</h4>
          <div className="paraghaph">

          <p>
            Hello! Currently I’m pursuing my Master’s degree in MCA. I
            have hands-on experience with technologies like Python, JavaScript,
            React, Django, HTML, CSS, GitHub, and databases. I’ve worked on
            projects such as a Netflix clone, YouTube clone, CRM system, Pokémon
            app using API, and a cryptocurrency tracking app.
          </p>
          <p>
            I am hardworking, smart, and curious about learning new
            technologies. My passion lies in leveraging technology to solve
            real-world problems and create impactful solutions. I aim to
            continue growing as a developer, contributing to innovative
            projects, and making a positive difference in the tech community.
          </p>
          </div>
        </article>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
