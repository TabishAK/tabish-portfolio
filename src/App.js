import "./App.scss";
import Navbar from "./componnents/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";
import avatar from "./images/logo/avatar2.png";
import laptop from "../src/images/logo/about.png";
function App() {
  return (
    <div className="App">
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

      <div className="about">
        <p className="i-design">
          I design and code beautifully simple things, and I love what I do.
        </p>
        <center>
          <img src={avatar} alt="" />
        </center>

        <h1>About me!</h1>
        <div className="container">
          <div className="liitle-details">
            <h3>Hi, Nice to meet you.</h3>
            <p>
              Since beginning my journey as a freelance designer nearly 10 years
              ago, I've done remote work for agencies, consulted for startups,
              and collaborated with talented people to create digital products
              for both business and consumer use. I'm quietly confident,
              naturally curious, and perpetually working on improving my chops
              one design problem at a time.
            </p>
          </div>
          <img src={laptop} alt="" style={{ width: "50%" }} />
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h1>Frontend Development</h1>
              <p>
                I value simple content structure, clean design patterns, and
                thoughtful interactions. I used React as Frontend tool and
                framework beacuase it is simple, fast and very scalable platform
                to use. It provides serverless and single app application
                feature. And that is why its most demanding these days!
              </p>
              <h3>Design Tools</h3>
              <ul>
                <li>Html5</li>
                <li>CSS3</li>
                <li>SCSS</li>
                <li>Bootstrap</li>
                <li>Material UI</li>
                <li>Ant Design</li>
                <li>React Bootstrap</li>
                <li>React Strap</li>
                <li>Media Queries</li>
                <li>And many other libraries etc.</li>
              </ul>

              <h3>Other Development Tools</h3>
              <ul>
                <li>Redux</li>
                <li>Rest API</li>
                <li>GraphQL</li>
                <li>React Routing</li>
                <li>Forms, Events and Keys</li>
                <li> Router, DOM and Pagination,</li>
                <li> React Hooks, Functional component</li>
                <li>All third party libraries and many more ...</li>
              </ul>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h1>Backend Development</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
