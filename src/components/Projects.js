import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/images/color-sharp2.png";
import projImg1 from "../assets/images/time-tracking-dashboard.jpg";
import projImg2 from "../assets/images/food-api-img.jpg";
import projImg3 from "../assets/images/gym-img.jpg";
import projImg4 from "../assets/images/todo-app.jpg";
import projImg5 from "../assets/images/calculator.jpg";
import projImg6 from "../assets/images/searchtable.jpg";
import projImg7 from "../assets/images/survey-form.jpg";
import projImg8 from "../assets/images/login&signup_page.jpg";
import projImg9 from "../assets/images/kisaan.jpg";
import projImg10 from "../assets/images/portfolio1.jpg";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {

    const projects = [
        {
            title: "Time Tracking Dashboard",
            description: "Development & Fetching JSON data from local Json file",
            imgUrl: projImg1,
            link: "https://time-tracking-dashboard-avilash.netlify.app/"
        },
        {
            title: "Food Api Project",
            description: "Design, Development using Api Call",
            imgUrl: projImg2,
            link: "https://food-api-project-avilash.netlify.app/"
          },
          {
            title: "Gym Website",
            description: "Design & Development",
            imgUrl: projImg3,
            link: "https://gym-landing-page-avilash.netlify.app/"
          },
          {
            title: "To Do App",
            description: "Design, Development using Vanilla Js",
            imgUrl: projImg4,
            link: "https://avilash-todo-app.netlify.app/"
          },
          {
            title: "Calculator",
            description: "Design, Development using Vanilla Js",
            imgUrl: projImg5,
            link: "https://zealous-wilson-91b994.netlify.app/"
          },
          {
            title: "Searchable Table",
            description: "Design, Development using jQuery",
            imgUrl: projImg6,
            link: "https://admiring-villani-560468.netlify.app/"
          },
          
    ];

    const projects2 = [
        {
            title: "Survey Form",
            description: "Design & Development",
            imgUrl: projImg7,
            link: "https://playful-unicorn-5da445.netlify.app/"
        },
        {
            title: "Login and Sign Up page",
            description: "Design & Development",
            imgUrl: projImg8,
            link: "https://semikart-login-page.netlify.app/"
          },
        //   {
        //     title: "Responsive Website",
        //     description: "Design, Development using bootstrap",
        //     imgUrl: projImg9,
        //     link: "https://kisaan-network-webpage.netlify.app/"
        //   },
          {
            title: "Personal Portfolio v1",
            description: "Design & Development",
            imgUrl: projImg10,
            link: "https://avilash-portfolio-website.netlify.app/"
          },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) => 
                                <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                <h2>Projects</h2>
                                <p>These are some of the projects that I have done/worked on lately. Click on the project title to view :) </p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                {/* <Nav.Item>
                                    <Nav.Link eventKey="third">
                                    Tab 3
                                    </Nav.Link>
                                </Nav.Item> */}
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index}
                                                    {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second"><Row>
                                        {
                                            projects2.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index}
                                                    {...project} />
                                                )
                                            })
                                        }
                                    </Row></Tab.Pane>
                                {/* <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane> */}
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}