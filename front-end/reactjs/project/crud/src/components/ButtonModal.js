import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default function ButtonModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button className="mt-3 mb-3" variant="success" onClick={handleShow}>
        Tambah Data
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Makanan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nama Makanan</Form.Label>
              <Form.Control type="text" placeholder="Nama makanan..." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Harga</Form.Label>
              <Form.Control type="int" placeholder="Harga makanan..." />
            </Form.Group>
            <Button variant="success" type="submit">
              Simpan
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
