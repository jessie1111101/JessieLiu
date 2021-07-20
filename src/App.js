import React, { Component } from 'react';
import MyNav from './components/MyNav';
import HomePage from './components/HomePage';  // or whatever the location is

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component  {
  constructor() {
    super();
    this.state = {
      light: true,
      homepage: true
    };
  }

  toggleTheme = () => {
    let current = this.state.light;
    this.setState({ light: ! current });
  }
  
  toggleHomepage = () => {
    let current = this.state.homepage;
    this.setState({ homepage: ! current});
  }
  
  render() {

    return (
        <>
       
          <div className={this.state.light? "App" : "AppDark"} id="home">
            <MyNav toggleTheme={this.toggleTheme} themeLight = {this.state.light} homepage={this.state.homepage} toggleHomepage={this.toggleHomepage} />
            {/* <Routes/> */}
            <HomePage/>
          </div>
      
        </>
      );
  };
}

// export default withRouter(App);
export default App;
