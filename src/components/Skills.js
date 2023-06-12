import { Container, Row, Col } from 'react-bootstrap';
//import '../assets/css/slide.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import skl1 from '../assets/img/meter1.svg';
import skl2 from '../assets/img/meter2.svg';
import skl3 from '../assets/img/meter3.svg';
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
                                Programming Skills
                            </h2>
                            <p>*General statement regarding skills*</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider' centerMode={true}>
                                <div className='item'>
                                    <img src={skl1} alt='Image' />
                                    <h5>Web Development</h5>
                                </div>
                                <div className='item'>
                                    <img src={skl2} alt='Image' />
                                    <h5>SQL programming</h5>
                                </div>
                                <div className='item'>
                                    <img src={skl3} alt='Image' />
                                    <h5>C++ Programming</h5>
                                </div>
                                <div className='item'>
                                    <img src={skl1} alt='Image' />
                                    <h5>Python Programming</h5>
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

