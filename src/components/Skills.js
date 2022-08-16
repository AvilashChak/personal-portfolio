import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import js_img from "../assets/images/javascript-1.svg";
import html_img from "../assets/images/html-1.svg";
import css_img from "../assets/images/css-3.svg";
import bootstrap_img from "../assets/images/bootstrap-5-1.svg";
import jQuery_img from "../assets/images/jquery-4.svg";
import react_img from "../assets/images/react-2.svg";
import nodeJs_img from "../assets/images/nodejs-1.svg";
import expressJs_img from "../assets/images/express-109.svg";
import mongoDb_img from "../assets/images/mongodb-icon-1.svg";
// import restApi_img from "../assets/images/restApi.webp";
import colorSharp from "../assets/images/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p> */}
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={js_img} alt="Image" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={html_img} alt="Image" />
                                    <h5>Html</h5>
                                </div>
                                <div className="item">
                                    <img src={css_img} alt="Image" />
                                    <h5>Css</h5>
                                </div>
                                <div className="item">
                                    <img src={jQuery_img} alt="Image" />
                                    <h5>jQuery</h5>
                                </div>
                                <div className="item">
                                    <img src={react_img} alt="Image" />
                                    <h5>React Js</h5>
                                </div>
                                <div className="item">
                                    <img src={bootstrap_img} alt="Image" />
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className="item">
                                    <img src={nodeJs_img} alt="Image" />
                                    <h5>Node Js</h5>
                                </div>
                                <div className="item">
                                    <img src={expressJs_img} alt="Image" />
                                    <h5>Express Js</h5>
                                </div>
                                <div className="item">
                                    <img src={mongoDb_img} alt="Image" />
                                    <h5>Mongo Db</h5>
                                </div>
                                {/* <div className="item">
                                    <img src={restApi_img} alt="Image" />
                                    <h5>Rest Api</h5>
                                </div> */}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" scr={colorSharp} alt=""></img>
        </section>
    )

}