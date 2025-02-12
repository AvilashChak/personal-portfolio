import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import logo from '../assets/images/logo.svg';
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';

export const NavBar = function () {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
            {/* <Navbar.Brand href="/">
                <img src={logo} alt="Logo" />
            </Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/avilash-chakraborty-a40928161/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="contact_image"/></a>
                    <a href="https://github.com/AvilashChak" target="_blank" rel="noreferrer"><img src={navIcon2} alt="contact_image"/></a>
                    <a href="https://drive.google.com/file/d/1fYCNCKFdVyl6NCK3P15WmfNU8iM785vI/view?usp=drive_link" target="_blank" rel="noreferrer"><img src={navIcon3} alt="contact_image"/></a>
                </div>
                <button>
                    <a href='#connect'><span>Let's connect</span></a>
                </button>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}