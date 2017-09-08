import React, {Component} from 'react';
import './App.css';
import {Button, Modal} from 'react-bootstrap';
// import Modal from 'react-bootstrap-modal'

class Truckdetailsform extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      location: '',
      event_venue: '',
      type: '',
      menu: '',
      contact: '',
      picture: '',
      fleet_number: '',

    }
  }

  newLocation = () => {
    this.setState({location: this.refs.location.value})
    console.log("location:" + this.refs.location.value)
  }

  newEvent_venue = () => {
    this.setState({event_venue: this.refs.event_venue.value})
    console.log("event_venue:" + this.refs.event_venue.value)
  }

  newType = () => {
    this.setState({type: this.refs.type.value})
    console.log("type:" + this.refs.type.value)
  }

  newMenu = () => {
    this.setState({menu: this.refs.menu.value})
    console.log("menu:" + this.refs.menu.value)
  }

  newContact = () => {
    this.setState({contact: this.refs.contact.value})
    console.log("contact:" + this.refs.contact.value)
  }

  newPicture = () => {
    this.setState({picture: this.refs.picture.value})
    console.log("picture:" + this.refs.picture.value)
  }

  newFleet_number = () => {
    this.setState({fleet_number: this.refs.fleet_number.value})
    console.log("picture:" + this.refs.fleet_number.value)
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
          New truck? Start Here!
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header >
            <Modal.Title>something like truck #__</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <input type='text' placeholder='location' ref='location' onChange={this.newLocation}></input>
              <input type='text' placeholder='venue' ref='event_venue' onChange={this.newEvent_venue}></input>
              <input type='text' placeholder='type' ref='type' onChange={this.newType}></input>
              <input type='text' placeholder='menu' ref='menu' onChange={this.newMenu}></input>
              <input type='text' placeholder='contact' ref='contact' onChange={this.newContact}></input>
              <input type='text' placeholder='picture' ref='picture' onChange={this.newPicture}></input>
              <input type='number' placeholder='#' ref='fleet_number' onChange={this.newFleet_number}></input>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" block onClick={() => {
              if (this.refs.location.value) {
                this.props.addTruck(this.state)
              }
              this.close();
            }}>SUBMIT
            </Button>
            <Button bsStyle="danger" block onClick={this.close}>CLOSE</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

}

export default Truckdetailsform
