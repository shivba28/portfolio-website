import React, {Component} from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import proj1 from '../assets/slides/Slide-1.JPG';
import proj2 from '../assets/slides/Slide-2.JPG';
import proj3 from '../assets/slides/Slide-3.JPG';
import proj4 from '../assets/slides/Slide-4.JPG';
import proj5 from '../assets/slides/Slide-5.JPG';
import proj6 from '../assets/slides/Slide-6.JPG';
import colorSharp2 from '../assets/img/color-sharp2.png';
import { Container } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css"

const getTouches = (evt) => {
  return (
    evt.touches || evt.originalEvent.touches // browser API
  );
};




export default class Project extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    enableSwipe: true,
    config: config.wobbly,
  };

  
  


  slides = [
    {
      key: 1,
      content: (
                <div style={{width: '450px', height: '450px', margin: '0px auto -100px 0px'}}>
                    <Container className="button-wrapper">
                    <img src={proj1} alt="portfolio" />
                    </Container>
                </div>
      ),
      githubLink: 'https://github.com/shivba28/portfolio-website',
      liveDemoLink: 'https://shivba28.github.io/portfolio-website/',
    },
    {
      key: 2,
      content: (
        <div style={{width: '450px', height: '450px', margin: '0px auto -100px 0px'}}>
          <Container className="button-wrapper">
            <img src={proj2} alt="Propchain"/>
            </Container>
        </div>
),
githubLink: 'https://github.com/shivba28/PropChain',
liveDemoLink:'',
    },
    {
      key: 3,
      content: (
        <div style={{width: '450px', height: '450px', margin: '0px auto -100px 0px', borderRadius: '100px'}}>
            <Container className="button-wrapper">
            <img src={proj3} alt="pacman"/>
            </Container>
        </div>
),
githubLink: 'https://github.com/shivba28/PacMan3D',
liveDemoLink:'',
    },
    {
        key: 4,
        content: (
            <div style={{width: '450px', height: '450px', margin: '0px auto -100px 0px'}}>
            <Container className="button-wrapper">
            <img src={proj4} alt="ccdp"/>
            </Container>
            </div>
  ),
  githubLink: 'https://github.com/shivba28/CCDP',
  liveDemoLink:'',
    },
    {
        key: 5,
        content: (
            <div style={{width: '450px', height: '450px', margin: '0px auto -100px 0px'}}>
            <Container className="button-wrapper">
            <img src={proj5} alt="gameRental" />
            </Container>
            </div>
  ),
  githubLink: 'https://github.com/shivba28/Game_Rentel',
  liveDemoLink:'',
    },
    {
        key: 6,
        content: (
            <div style={{width: '450px', height: '450px', margin: '0px auto -100px 0px'}}>
            <Container className="button-wrapper">
            <img src={proj6} alt="mini_proj" />
            </Container>
            </div>
  ),
  githubLink: 'https://github.com/shivba28/Mini-Projects',
  liveDemoLink:'',
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  handleTouchStart = (evt) => {
    if (!this.state.enableSwipe) {
      return;
    }

    const firstTouch = getTouches(evt)[0];
    this.setState({
      ...this.state,
      xDown: firstTouch.clientX,
      yDown: firstTouch.clientY
    });
  };

  handleTouchMove = (evt) => {
    if (!this.state.enableSwipe || (!this.state.xDown && !this.state.yDown)) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = this.state.xDown - xUp;
    let yDiff = this.state.yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        /* left swipe */
        this.setState({
          goToSlide: this.state.goToSlide + 1,
          xDown: null,
          yDown: null
        });
      } else {
        /* right swipe */
        this.setState({
          goToSlide: this.state.goToSlide - 1,
          xDown: null,
          yDown: null
        });
      }
    }
  };


  handleGithubClick = () => {
    const currentSlide = this.slides[this.state.goToSlide];
    if (currentSlide && currentSlide.githubLink) {
      window.open(currentSlide.githubLink, "_blank");
    }
  };

  handleLiveDemoClick = () => {
    const currentSlide = this.slides[this.state.goToSlide];
    if (currentSlide && currentSlide.liveDemoLink) {
      window.open(currentSlide.liveDemoLink, "_blank");
    }
  };

  render() {
    
    return (
        <section className="project" id="project">
          
      <TrackVisibility>
      {({ isVisible }) =>
      <div className={isVisible ? "animate__animated animate__tada" : ""}>
        <div
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        className="proj-bx"
      >
        <h2>Projects</h2>
        <p>In my project section, I showcase a diverse range of projects that demonstrate my technical proficiency and problem-solving abilities. 
          These projects highlight my expertise in various areas of software development, including web development, data analysis, and machine learning. 
          Each project represents a unique challenge that I tackled with creativity, attention to detail, and a strong focus on delivering practical and impactful solutions.
          </p>
       <div className="carousel-container">
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          animationConfig={this.state.config}
        />
        </div>
        
       
        <div style={{ position:"grid"}}>

        <button class='pushable btn1'  onClick={this.handleGithubClick} style={{marginRight: "20px"}}>
                    <span class="shadow"></span>
                    <span class="edge"></span>
                    <span class="front">
                      Github
                    </span>
                    </button>
        
        <button class='pushable btn2' onClick={this.handleLiveDemoClick}>
                    <span class="shadow"></span>
                    <span class="edge"></span>
                    <span class="front">
                      Live Demo
                    </span>
                    </button>
                  
        </div>
        </div>
      </div>}
      </TrackVisibility>

      <img className='background-image-right' src={colorSharp2} alt='img'/><br/><br/><br/>
      </section>
    );
  }
}
