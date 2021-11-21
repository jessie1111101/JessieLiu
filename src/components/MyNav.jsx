import React, { Component } from 'react';
import { Navbar, Nav, Button, Image } from 'react-bootstrap';
import { HashLink} from 'react-router-hash-link';
import sun from '../images/icons8-sun-30.png';
import moon from '../images/icons8-moon-symbol-30.png';

class MyNav extends Component {
    constructor(props) {
        super(props);
    
        console.log(this.props)
    }

    render() { 
        let {toggleTheme, themeLight} = this.props;

        return ( 
            <Navbar expand="sm" bg="navBar" className="navBar" fixed="top">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="container-fluid">
                        {/* <Nav> */}
                            <Nav.Link as={HashLink} scroll={el => window.scroll({behavior: "smooth", top: el.offsetTop - 50})} exact to="/#home">
                            {'>home'}
                            </Nav.Link>
                            <Nav.Link as={HashLink} scroll={el => window.scroll({behavior: "smooth", top: el.offsetTop})} exact to="/#aboutMe">
                                {'>about'}
                            </Nav.Link>
                            <Nav.Link as={HashLink} scroll={el => window.scroll({behavior: "smooth", top: el.offsetTop - 50})} exact to="/#experience">
                                {'>experience'}
                            </Nav.Link>
                            <Nav.Link as={HashLink} scroll={el => window.scroll({behavior: "smooth", top: el.offsetTop - 50})} exact to="/#projects">
                                {'>projects'}
                            </Nav.Link>
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