import React, { Component } from 'react';
import Socials from './Socials';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';

class HomePage extends Component {
    
    render() { 
        return (
            <>
                {/* <MyNav toggleTheme={this.toggleTheme} themeLight = {this.state.light}/> */}
                <Socials/>
                <div id="aboutMe">
                <AboutMe/>
                </div>
                <div id="experience">
                <Experience/>
                </div>
                <div id="projects">
                <Projects/>
                </div>
            </>
        );
    };
}
 
export default HomePage;