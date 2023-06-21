import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.svg';
import logo from '../assets/img/bitmoji.ico';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
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
              <Navbar.Brand href="https://shivba28.github.io/portfolio-website/">
                <img src={logo} alt="Logo" style={{width: "80px", height: "80px"}}/>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                  <Nav.Link href="#skill" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                  <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                  <div className="social-icon">
                    <a href="https://www.linkedin.com/in/shivba-pawar-7572a9162/"><img src={navIcon1} alt="" /></a>
                    <a href="https://github.com/shivba28"><img src={navIcon2} alt="" /></a>
                  </div>
                  <a href="#contact"><button className="vvd"><span>Let’s Connect</span></button></a>
                </span>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      )
}