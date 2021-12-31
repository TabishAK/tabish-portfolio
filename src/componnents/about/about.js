import "./about.scss";
import Button from "./../button/button";
import avatar from "../../images/logo/avatar2.png";
import { BsGithub, BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
const About = () => {
  return (
    <div className="about">
      <p className="i-design">
        I design and code beautifully simple things, and I love what I do.
      </p>
      <center>
        <img src={avatar} alt="" />
      </center>
      <h1>About me!</h1>
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <h4>SOCIAL LINKS</h4>
            <div>
              <BsGithub />
              <a>https://github.com/tabishak</a>
            </div>
            <div>
              <BsLinkedin />
              <a>https://www.linkedin.com/in/tabish-ali-khan-45871013b/</a>
            </div>
            <div>
              <BsFacebook />
              <a>https://www.facebook.com/TabishAlee</a>
            </div>
            <div>
              <a>
                <BsInstagram />
                https://www.instagram.com/taabisshh/
              </a>
            </div>
          </div>
          <div className="col-xl-9">
            <div className="liitle-details">
              <h3>Hi, Nice to meet you.</h3>
              <p>
                Since beginning my journey as a freelance designer nearly 10
                years ago, I've done remote work for agencies, consulted for
                startups, and collaborated with talented people to create
                digital products for both business and consumer use. I'm quietly
                confident, naturally curious, and perpetually working on
                improving my chops one design problem at a time.
              </p>
              <Button label="See more" />
            </div>
          </div>
        </div>
      </div>{" "}
      <hr
        style={{
          background: "gray",
          height: "2px",
          marginTop: "5rem",
          marginBottom: "0",
        }}
      />
    </div>
  );
};

export default About;
