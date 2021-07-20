import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import BlogNav from './BlogNav';

class Blog extends Component {
    
    render() { 
        return (
            <>
            {/* <BlogNav/>  */}
            <div id="blog">
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
            </div>
            </>
        );
    };
}
 
export default Blog;