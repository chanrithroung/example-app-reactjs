// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';




// function Modal() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Are you sure!</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button variant="danger" onClick={() => {
//             // deleteUser();
//           }}>
//             <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Confirm Delete
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Modal;


import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { useState } from "react";
import { Modal, Button } from "react-bootstrap";


const ModalExample = ({id,deleteUser}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                <FontAwesomeIcon icon={faTrash} /> Delete
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want delete this user!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => {
                        deleteUser(id);
                        handleClose();
                    }}>
                        Confirm Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalExample;