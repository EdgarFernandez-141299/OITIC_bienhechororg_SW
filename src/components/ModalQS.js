import React from 'react'
import { Modal, Button } from 'react-bootstrap';

function ModalQS(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            ¿Quienes Somos?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Somos una ...</h4>
          <p>
            Padre Pedro Horarios: 12 pm - 6 pm
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function QuienesSomosModal() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="link" onClick={() => setModalShow(true)}>
        <div class="grid-item1">
         <div class="div-imghidden" >
         <img class="img" src={require("../images/im1.jpg")} alt="imagen"/>
         </div>
        </div>
        </Button>
  
        <ModalQS
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

export default QuienesSomosModal