import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import proj2 from '../assets/img/project-img1.png';
import proj3 from '../assets/img/project-img2.png';
import proj4 from '../assets/img/project-img3.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import { Container} from "react-bootstrap";
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
    config: config.wobbly
  };


  slides = [
    {
      key: 1,
      content: (
                <div style={{width: '450px', height: '450px', margin: '0px auto -100px 0px'}}>
                    <Container className="button-wrapper">
                    <img src={proj2} alt="1" />
                    </Container>
                </div>
      ),
      githubLink: 'https://github.com/shivba28/portfolio-website',
    },
    {
      key: 2,
      content: (
        <div style={{width: '450px', height: '450px', margin: '0px auto -100px 0px'}}>
          <Container className="button-wrapper">
            <img src={proj3} alt="2" />
            </Container>
        </div>
),
githubLink: '',
    },
    {
      key: 3,
      content: (
        <div style={{width: '450px', height: '450px', margin: '0px auto -100px 0px'}}>
            <Container className="button-wrapper">
            <img src={proj4} alt="3" />
            </Container>
        </div>
),
githubLink: '',
    },
    {
        key: 4,
        content: (
            <div style={{width: '450px', height: '450px', margin: '0px auto -100px 0px'}}>
            <Container className="button-wrapper">
            <img src={proj2} alt="4" />
            </Container>
            </div>
  ),
  githubLink: '',
    },
    {
        key: 5,
        content: (
            <div style={{width: '450px', height: '450px', margin: '0px auto -100px 0px'}}>
            <Container className="button-wrapper">
            <img src={proj3} alt="5" />
            </Container>
            </div>
  ),
  githubLink: '',
    },
    {
        key: 6,
        content: (
            <div style={{width: '450px', height: '450px', margin: '0px auto -100px 0px'}}>
            <Container className="button-wrapper">
            <img src={proj4} alt="6" />
            </Container>
            </div>
  ),
  githubLink: '',
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

  handleLiveDemoClick = () => {
    const currentSlide = this.slides[this.state.goToSlide];
    if (currentSlide && currentSlide.githubLink) {
      window.open(currentSlide.githubLink, "_blank");
    }
  };

  render() {

    return (
        <section className="project" id="project">
          
      <TrackVisibility>
      {({ isVisible }) =>
      <div className={isVisible ? "animate__animated animate__slideInRight" : "animate__animated animate__slideOutLeft"}>
        <div
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        className="proj-bx"
      >
        <h2>Projects</h2>
        <p>*A statement regarding project's made*</p>
       <div className="carousel-container">
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          animationConfig={this.state.config}
        />
        </div>
       
        <div style={{width: "85%", height: "20%", position:"relative"}}>
       
        <button class='pushable'  onClick={this.handleLiveDemoClick}>
                    <span class="shadow"></span>
                    <span class="edge"></span>
                    <span class="front">
                      Github
                    </span>
                    </button>
        </div>
        <div style={{width: "115%", position:"relative", top:"-20%"}}>
        <button class='pushable'>
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
