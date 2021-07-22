import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import self from '../images/self.jpg';

//introduces me
class AboutMe extends Component {
    
    render() { 
        return (
            <Container className="AboutMe">
                <Row>
                    <Col>
                        <h2 className="introTextSpacer section">About Me </h2>
                    </Col>
                </Row>
                
                <div className="sectionBorder">
                    <Row>
                        <Col>
                            I'm a 4th year bachelor of computer science student at McGill based in Toronto. I started off my bachelor's in neuroscience, but found myself intrigued by the tech industry. With zero CS knowledge or experience, I started by self-learning Python in the summer after my 1st year of uni. In 3rd year, I was able to switch into computer science, and landed my first software developer internship that winter semester. I am a fast and motivated self-learner who enjoys being challenged at work and school. 
                        </Col>
                        <Col md="auto">
                            <div class="imgHover">
                                <a href="https://www.linkedin.com/in/jessie-liu-1101/" target="_blank" rel="noreferrer">
                                <Image className="selfImage image" src={self}/>
                                </a>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h4 className="introTextSpacer">Here's what I worked with so far: </h4>  
                        </Col>
                    </Row>

                    <Row >
                        <Col>
                            <h5>Programming Languages: </h5>
                                <ul>
                                    <li>Python</li>
                                    <li>Javascript</li>
                                    <li>HTML</li>
                                    <li>(S)CSS</li>
                                    <li>SQL</li>
                                    <li>Java</li>
                                    <li>C</li>
                                    <li>Bash</li>
                                    <li>Mips</li>
                                </ul> 
                        </Col>
                        <Col>
                            <h5>Framework/Tools: </h5>
                                <ul>
                                    <li>Git</li>
                                    <li>React.js and Node.js</li>
                                    <li>REST API</li>
                                    <li>Postman</li>
                                    <li>PostgreSQL</li>
                                    <li>AWS Tools</li>
                                    <li>Linux</li>
                                    <li>Flask</li>
                                    <li>Jest and Cypress</li>
                                    <li>Jira</li>
                                    <li>Webpack</li>
                                    <li>Storybook</li>
                                </ul> 
                        </Col>
                    </Row>
                </div>
            </Container>          
        );
    };
}
 
export default AboutMe;