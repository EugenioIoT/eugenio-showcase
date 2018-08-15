import React, { Component } from 'react';
import './css/eugenio-bootstrap.css';
import Menu from './component/Menu';

class App extends Component {

  render() {
    return (
      <div className="row">
        <div className="container">
          <div className="col-md-2">
            <Menu />
          </div>
          <div className="col-md-10">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
