import React, { Component } from 'react';
import { Navbar, Nav, Button, Image } from 'react-bootstrap';
import { HashLink} from 'react-router-hash-link';
import {Link} from 'react-router-dom';
import sun from '../images/icons8-sun-30.png';
import moon from '../images/icons8-moon-symbol-30.png';

class MyNav extends Component {
    constructor(props) {
        super(props);
    
        console.log(this.props)
    }

    render() { 
        let {toggleTheme, themeLight, homepage, toggleHomepage} = this.props;

        return ( 
            <Navbar expand="sm" bg="navBar" className="navBar" fixed="top">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="container-fluid">
                        {/* <Nav> */}
                            <Nav.Link as={HashLink} scroll={el => window.scroll({behavior: "smooth", top: el.offsetTop - 50})} exact to="/#home">
                            Home
                            </Nav.Link>
                            <Nav.Link as={HashLink} scroll={el => window.scroll({behavior: "smooth", top: el.offsetTop})} exact to="/#aboutMe">
                                About
                            </Nav.Link>
                            <Nav.Link as={HashLink} scroll={el => window.scroll({behavior: "smooth", top: el.offsetTop - 50})} exact to="/#experience">
                                Experience
                            </Nav.Link>
                            <Nav.Link as={HashLink} scroll={el => window.scroll({behavior: "smooth", top: el.offsetTop - 50})} exact to="/#projects">
                                Projects
                            </Nav.Link>
                            {/* <Nav.Link as={Link} exact to="/blog">
                                <div onClick={toggleHomepage} >
                                Blog
                                </div>
                            </Nav.Link> */}
                            <Button className="ml-auto" variant="outline-secondary" onClick={toggleTheme}>
                                {themeLight? <Image className="themeImg" src={moon}/> 
                                : <Image className="themeImg" src={sun}/> }
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        );
    }
}
 
export default MyNav;