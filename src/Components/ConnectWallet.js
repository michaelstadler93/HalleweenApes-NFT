import React from 'react';
import {Modal, ListGroup} from "react-bootstrap";

function ConnectWallet(props) {

  const { show, onHide, connectMetamask } = props

  function connect_metamask() {
    onHide()
    connectMetamask()
  }
  
  return (
    <Modal show={show} onHide={onHide}  aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Connect to a wallet
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item onClick={ () => connect_metamask() }> 
            MetaMask 
            <div className="wallet-logo">
              <img alt="" src="images/landing/wallet/metamask.png"></img>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
    </Modal>
  );
}

  export default ConnectWallet;