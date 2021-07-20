import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

//introduces my experience
class Experience extends Component {
    
    render() { 
        return (
            <Container className="Experience">
                <Row>
                    <Col>
                        <h2 className="introTextSpacer section">Experience </h2>
                    </Col>
                </Row>
                
                <div className="sectionBorder">
                    <Row>
                        <Col>
                            <h4> Bombardier Inc. </h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6> Software Developer Intern </h6>
                        </Col>
                        <Col>
                            <h6 className="rightText"> Jan 2021 - August 2021 </h6>
                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            <ul className="experienceBullets">
                                <li>Apply problem solving and fast learning skills to enhance full stack user experience on Bombardier’s 
                                Online Parts Ordering 2.0 website
                                </li>
                                <li>Accomplish tasks in a fast-paced scrum agile team environment with bi-weekly sprints using React, 
                                Redux, SCSS, Bootstrap, Node.js, REST APIs, and a PostgreSQL database
                                </li>
                                <li>Increase coverage and reliability for end-to-end tests implemented with Cypress and Jest, speeding up 
                                UAT Testing Period 
                                </li>
                                <li>Utilize serverless architectures built on top of AWS (DynamoDB, CloudWatch, CodeCommit, S3, etc)</li>
                                <li>Improved user role authentication through coding REST API requests with thorough Postman 
                                testing and appropriate frontend implementation to ensure smooth user experience
                                </li>
                                <li>Research and implement new technologies and software to enhance existing projects and solve digital 
                                challenges such as web scraping with Python 
                                </li>
                            </ul> 
                        </Col>
                    </Row>
                </div>
            </Container>          
        );
    };
}
 
export default Experience;