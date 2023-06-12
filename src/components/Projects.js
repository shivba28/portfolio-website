import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export const Project = () => {
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

    const project = [
        {
            title: "Project 1",
            description: "project description",
            imgUrl: '', 
        }


    ]

    return(
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col>
                        <div className='proj-bx'>
                            <h2>
                                Projects
                            </h2>
                            <p>*A statement regarding project's made*</p>
                            <Carousel responsive={responsive} centerMode={true} infinite={true} className='proj-slider'>

                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}