import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import mochi_jump from '../images/mochi_jump_gif.gif';

//introduces my projects
class Projects extends Component {
    
    render() { 
        return (
            <Container className="Projects endOfSite">
                <Row>
                    <Col>
                        <h2 className="introTextSpacer section">Projects </h2>
                    </Col>
                </Row>

                <div className="sectionBorder projectSpacer">
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <h4> This website </h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h6> My portfolio website </h6>
                                </Col>
                                <Col md="auto">
                                    <h6 className="rightText"> July 2021 </h6>
                                </Col>
                            </Row>
                            <Row >
                                <Col>
                                    <ul className="experienceBullets">
                                        <li> Coded using React.js, react-bootstrap, SCSS, HTML
                                        </li>
                                    </ul> 
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

                <div className="sectionBorder">
                    <Row>
                        <Col md="auto"> 
                            <div className="imgHover">
                                <a href="https://github.com/jessie1111101/MochiJump" target="_blank" rel="noreferrer">
                                <Image src={mochi_jump} className="gif image" class="responsive"/>
                                </a>
                            </div>
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <h4> Mochi Jump </h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h6> Self-designed and programmed single-player game  </h6>
                                </Col>
                                <Col md="auto">
                                    <h6 className="rightText"> June 2020 </h6>
                                </Col>
                            </Row>
                            <Row >
                                <Col>
                                    <ul className="experienceBullets">
                                        <li>Used Python module Pygame and Object Oriented Programming (OOP) to create a game with multiple gaming mechanics
                                        </li>
                                        <li>Use the left and right arrow keys to keep the jumping mochi (a japanese rice cake) on the platforms and away from the falling utensils
                                        </li>
                                    </ul> 
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

                {/* placeholder to show blog is unfinished*/}
                {/* <div id="blog">
                    <Row>
                        <Col>
                            <h2 className="introTextSpacer section">Blog </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            work in progress...
                        </Col>
                    </Row>
                </div> */}

            </Container> 
            
        );
    };
}
 
export default Projects;