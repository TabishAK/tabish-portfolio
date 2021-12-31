import "./banner.scss";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";
import Navbar from "./../navbar/navbar";
const Banner = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="container">
        <h1 className="name">Hi, This is Tabish Ali Khan.</h1>
        <h1 className="designation">I am a Full Stack Developer.</h1>
        <h6 className="specialization">
          Specialized in MERN Stack Development!
        </h6>
        <div className="dev-icons">
          <div>
            <SiMongodb style={{ color: "#66902f" }} />
            <p> MongoDB </p>
            <h6>M</h6>
          </div>

          <div>
            <SiExpress style={{ color: "white" }} />
            <p> Express JS</p>
            <h6>E</h6>
          </div>
          <div>
            <FaReact style={{ color: "#5bcbb3" }} />
            <p> React JS</p>
            <h6>R</h6>
          </div>
          <div>
            <FaNodeJs style={{ color: "#88c04b" }} />
            <p> Node JS</p>
            <h6>N</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
