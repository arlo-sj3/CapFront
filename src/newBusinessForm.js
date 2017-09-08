import React, {Component} from 'react';
import './App.css';
import {Button, Modal} from 'react-bootstrap';
// import Modal from 'react-bootstrap-modal'

class Newbusinessform extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      name: '',
      fleet_size: ''
    }
  }

  newName = () => {
    this.setState({name: this.refs.name.value})
    console.log("name:" + this.refs.name.value)
  }

  newFleet = () => {
    this.setState({fleet_size: this.refs.fleet_size.value})
    console.log("fleet size:" + this.refs.fleet_size.value)
  }


  getInitialState = () => {
    return {showModal: false};
  }

  close = () => {
    this.setState({showModal: false});
  }

  open = () => {
    this.setState({showModal: true});
    //  console.log(this.state.showModal)
  }



  render() {
    // const popover = (
    //   <Popover id="modal-popover" title="popover">
    //     very popover. such engagement
    //   </Popover>
    // );
    // const tooltip = (
    //   <Tooltip id="modal-tooltip">
    //     wow.
    //   </Tooltip>
    // );

    return (
      <div>

        <Button bsStyle="primary" onClick={this.open}>
          New business? Start Here!
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header >
            <Modal.Title>Add a business.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <input type='text' placeholder='Business Name' ref='name' onChange={this.newName}></input>
              <input type='number' placeholder='Fleet size' ref='fleet_size'
                min="1" max="10" onChange={this.newFleet}></input>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" block onClick={() => {
              if (this.refs.name.value && this.refs.fleet_size.value) {
                this.props.addBusiness(this.state)
              }
              this.close
            }}>SUBMIT
            </Button>
            <Button bsStyle="danger" block onClick={this.close}>CLOSE</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

}

export default Newbusinessform
