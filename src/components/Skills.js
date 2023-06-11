import { Container, Row, Col } from 'react-bootstrap';
//import '../assets/css/slide.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../assets/img/color-sharp.png';

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

    return(
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>
                                Skills
                            </h2>
                            <p>*General statement regarding skills*</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider' centerMode={true}>
                                <div className='item'>
                                    <img src={''} alt='Image' />
                                    <h5>Project 1</h5>
                                </div>
                                <div className='item'>
                                    <img src={''} alt='Image' />
                                    <h5>Project 2</h5>
                                </div>
                                <div className='item'>
                                    <img src={''} alt='Image' />
                                    <h5>Project 3</h5>
                                </div>
                                <div className='item'>
                                    <img src={''} alt='Image' />
                                    <h5>Project 4</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} />
        </section>
    )
}

