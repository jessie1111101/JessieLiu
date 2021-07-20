import React, { Component } from 'react';
import {Container, Row, Col, Button, Image} from 'react-bootstrap';
import linkedIn from '../images/icons8-linkedin-24.png';
import gmail from '../images/icons8-gmail-24.png';
import instagram from '../images/icons8-instagram-24.png';
import github from '../images/icons8-github-24.png';


//contain image and links to linkedin, github, gmail, ig, 
class Socials extends Component {

    render() { 

        return (
            <Container className="Socials">
                <Row className="justify-content-md-center">
                    <Col>
                        <h2 className="introTextSpacer">Hi I'm Jessie ☺, </h2>
                        <h2> a software developer from Toronto. </h2>
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Col className="socialSpacer">
                        <a href="https://www.linkedin.com/in/jessie-liu-1101/" target="_blank" rel="noreferrer">
                            <Button className="socialButton" variant="outline-secondary">
                                <Image src={linkedIn}/>
                            </Button>
                        </a>{' '}
                        <a href="https://github.com/jessie1111101" target="_blank" rel="noreferrer">
                            <Button className="socialButton" variant="outline-secondary">
                                <Image src={github}/>
                            </Button>
                        </a>{' '}
                        <a href="https://www.instagram.com/jessie2o13/" target="_blank" rel="noreferrer">
                            <Button className="socialButton" variant="outline-secondary">
                                <Image src={instagram}/>
                            </Button>
                        </a>{' '}
                        <a href="mailto: jessieliu1101@gmail.com" target="_blank" rel="noreferrer">
                            <Button className="socialButton" variant="outline-secondary">
                                <Image src={gmail}/>
                            </Button>
                        </a>
                    </Col>
                </Row>
            </Container>          
        );
    };
}
 
export default Socials;