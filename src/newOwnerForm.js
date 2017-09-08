import React, {Component} from 'react';
import './App.css';
import {Button, Modal} from 'react-bootstrap';
// import Modal from 'react-bootstrap-modal'

class Newownerform extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      name: '',
      password: '',
      email: ''
    }
  }

  newName = () => {
    this.setState({name: this.refs.name.value})
    console.log("name:" + this.refs.name.value)
  }

  newPass = () => {
    this.setState({password: this.refs.pass.value})
    console.log("pass:" + this.refs.pass.value)
  }

  newEmail = () => {
    this.setState({email: this.refs.email.value})
    console.log("email:" + this.refs.email.value)
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
          New owner? Start Here!
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header >
            <Modal.Title>Create a new account.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <input type='text' placeholder='Enter Your Name!' ref='name' onChange={this.newName}></input>
              <input type='text' placeholder='Enter A Password!' ref='pass' onChange={this.newPass}></input>
              <input type='text' placeholder='Enter Your Email!' ref='email' onChange={this.newEmail}></input>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" block onClick={() => {
              if (this.refs.name.value && this.refs.pass.value && this.refs.email.value) {
                this.props.addOwner(this.state)
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

export default Newownerform
