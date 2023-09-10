import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AnimalModal = ({ show, onHide, onAddAnimal }) => {
  // State to store the animal data
  const [animalData, setAnimalData] = useState({
    name: "",
    age: "",
    image: "",
    type: "dog", // Default type is "dog"
  });

  // Function to handle input changes and update the animal data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnimalData({ ...animalData, [name]: value });
  };

  // Function to handle adding a new animal
  const handleAddAnimal = () => {
    // Log a message to indicate the button click
    console.log("Add button clicked");

    // Call the provided callback to add the new animal and then close the modal
    onAddAnimal(animalData);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Animal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Animal Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={animalData.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="age">
            <Form.Label>Animal Age</Form.Label>
            <Form.Control
              type="text"
              name="age"
              value={animalData.age}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="image">
            <Form.Label>Animal Image URL</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={animalData.image}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="type">
            <Form.Label>Animal Type</Form.Label>
            <Form.Control
              as="select"
              name="type"
              value={animalData.type}
              onChange={handleInputChange}
            >
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddAnimal}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AnimalModal;
