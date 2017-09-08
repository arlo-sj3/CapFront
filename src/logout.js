import React, {Component} from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

class Logout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="topbar">
        <Button onClick={this.props.logout}
          bsStyle="danger"


        >
          LOGOUT
        </Button>
      </div>
    )
  }

}

export default Logout;
