import "./services.scss";
import { SiExpress, SiMongodb, SiCss3 } from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { BsFillBootstrapFill } from "react-icons/bs";
import laptop from "../../images/logo/about.png";
const Services = () => {
  return (
    <div className="services">
      <h1>Services</h1>
      <p>
        I make frontend and backend of website creatively with good programming
        practices and standards. Experienced to provide my clients best and
        feasible solutions where they can create their good understandings.
        <br />
        <br />I provide backend or frontend half solution as well as full
        solutions for web application which requires extra features and
        functionality. Also the websites which requrires Admin Dashboards for
        CMS, product uploading like E-Commerce websites. And many more things.
      </p>

      <center>
        <img src={laptop} alt="" style={{ width: "50%" }} />
      </center>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h1>Frontend Development</h1>
            <p>
              I value simple content structure, clean design patterns, and
              thoughtful interactions. I used React as Frontend tool and
              framework beacuase it is simple, fast and very scalable platform
              to use. It provides serverless and single app application feature.
              And that is why its most demanding these days!
            </p>

            <h3>TOOLS:</h3>

            <div className="dev-icons">
              <div>
                <FaReact style={{ color: "#5bcbb3", fontSize: 45 }} />
                <p> React JS </p>
              </div>
              <div>
                <AiFillHtml5 style={{ color: "#dd4b25", fontSize: 45 }} />
                <p> HTML5</p>
              </div>
              <div>
                <SiCss3 style={{ color: "#3595cf", fontSize: 45 }} />
                <p> CSS3 </p>
              </div>
              <div>
                <BsFillBootstrapFill
                  style={{ color: "#533b78", fontSize: 45 }}
                />
                <p> Bootstrap </p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h1>Backend Development</h1>
            <p>
              I develop backend using Node JS and Express JS because it offers
              many benefits for web app development like easy scalability, high
              performance, highly extensible, support of the large and active
              community, and many more. <br />
              As a database, any database can be used as per client requirement
              like MongoDB, MySQL or Firebase.
            </p>
            <h3>TOOLS:</h3>
            <div className="dev-icons">
              <div>
                <SiMongodb style={{ color: "#66902f", fontSize: 45 }} />
                <p> MongoDB </p>
              </div>

              <div>
                <SiExpress style={{ color: "white", fontSize: 45 }} />
                <p> Express JS</p>
              </div>

              <div>
                <FaNodeJs style={{ color: "#88c04b", fontSize: 45 }} />
                <p> Node JS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr
        style={{
          background: "gray",
          height: "2px",
          marginBottom: "0",
        }}
      />
    </div>
  );
};

export default Services;
