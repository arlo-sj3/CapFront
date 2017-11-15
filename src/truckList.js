import React, {Component} from 'react';
import './App.css';

class Trucklist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser:'',
      trucks: []
    }
  }

  async componentDidMount() {
    const response = await fetch('https://foodtraxserver.herokuapp.com/trucks')
    const json = await response.json()
    var result = [];
    var trucks = json;
    let promises = [];
    for (var i = 0; i < trucks.length; i++) {
      let truck = trucks[i]
      console.log(json);
      console.log(this.state)
      console.log(this.props);
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1 className="manage" >
          Manage your trucks:{this.props.currentUser.owner_id}
        </h1>
      </div>
    )
  }

}

export default Trucklist;
