import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

const SubscribeForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateData, setUpdateData] = useState({
    originalName: '',
    originalEmail: '',
    newName: '',
    newEmail: ''
  });

  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotNome, setForgotNome] = useState('');
  const [foundEmail, setFoundEmail] = useState(null);

  const [alertMessage, setAlertMessage] = useState('');
  const [showAlertModal, setShowAlertModal] = useState(false);

  const showCustomAlert = (message) => {
    setAlertMessage(message);
    setShowAlertModal(true);
  };

  const closeCustomAlert = () => {
    setShowAlertModal(false);
    setAlertMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nome || !formData.email) {
      showCustomAlert('Please fill out both name and email.');
      return;
    }

    const payload = {
      nome: formData.nome.trim(),
      email: formData.email.trim().toLowerCase()
    };

    try {
      const response = await fetch('http://localhost:5000/client', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        showCustomAlert('Subscription successful!');
        setFormData({ nome: '', email: '' });
      } else {
        if (data.message?.includes('already exists')) {
          showCustomAlert('This email is already registered!');
        } else {
          showCustomAlert(data.message || 'There was an error submitting the form.');
        }
      }
    } catch (error) {
      console.error('Request failed:', error);
      showCustomAlert('Failed to connect to the server.');
    }
  };

  const handleUnsubscribe = async () => {
    if (!formData.nome || !formData.email) {
      showCustomAlert('Please enter your name and email to unsubscribe.');
      return;
    }

    const payload = {
      nome: formData.nome.trim(),
      email: formData.email.trim().toLowerCase()
    };

    try {
      const response = await fetch('http://localhost:5000/client', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        showCustomAlert('You have been unsubscribed.');
        setFormData({ nome: '', email: '' });
      } else {
        showCustomAlert(data.message || 'Error trying to unsubscribe.');
      }
    } catch (error) {
      console.error('Unsubscribe failed:', error);
      showCustomAlert('Failed to connect to the server.');
    }
  };

  const handleUpdateEmail = async () => {
    const { originalName, originalEmail, newName, newEmail } = updateData;

    if (!originalName || !originalEmail || !newName || !newEmail) {
      showCustomAlert('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/client', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          originalName: originalName.trim(),
          originalEmail: originalEmail.trim().toLowerCase(),
          nome: newName.trim(),
          email: newEmail.trim().toLowerCase()
        })
      });

      const data = await response.json();

      if (response.ok) {
        showCustomAlert('Your info was updated!');
        setShowUpdateModal(false);
        setUpdateData({ originalName: '', originalEmail: '', newName: '', newEmail: '' });
      } else {
        showCustomAlert(data.message || 'Error updating.');
      }
    } catch (error) {
      console.error('Update failed:', error);
      showCustomAlert('Server error.');
    }
  };

  const handleShowForgotModal = () => setShowForgotModal(true);
  const handleCloseForgotModal = () => {
    setShowForgotModal(false);
    setForgotNome('');
    setFoundEmail(null);
  };

  const censorEmail = (email) => {
    const [namePart, domain] = email.split('@');
    const visibleLength = Math.ceil(namePart.length / 2);
    const censored = namePart.slice(0, visibleLength) + '*'.repeat(namePart.length - visibleLength);
    return `${censored}@${domain}`;
  };

  const handleFindEmail = async () => {
    if (!forgotNome.trim()) {
      showCustomAlert('Please enter your name.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/client?nome=${encodeURIComponent(forgotNome.trim())}`);
      const data = await response.json();

      if (response.ok && data.email) {
        setFoundEmail(censorEmail(data.email));
      } else {
        showCustomAlert(data.message || 'No email found for this name.');
      }
    } catch (error) {
      console.error('Fetch failed:', error);
      showCustomAlert('Failed to connect to the server.');
    }
  };

  return (
    <div className="p-4 bg-light rounded shadow-sm">
      <Form onSubmit={handleSubmit} className="contact-form">
        <Form.Group controlId="formNome">
          <Form.Label style={{ fontSize: '20px' }}>Name</Form.Label>
          <Form.Control
            type="text"
            name="nome"
            placeholder="Enter name"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label style={{ fontSize: '20px' }}>E-mail</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your e-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="dark" type="submit" className="submit-button">
          Subscribe to receive my Newsletter
        </Button>

        <div className="mt-3 d-flex flex-column align-items-end">
          <Button variant="link" type="button" className="p-0 mb-1" onClick={handleUnsubscribe}>
            Unsubscribe
          </Button>
          <Button variant="link" type="button" className="p-0 mb-1" onClick={() => setShowUpdateModal(true)}>
            Uptade contact
          </Button>
          <Button variant="link" type="button" className="p-0" onClick={handleShowForgotModal}>
            Forgot my e-mail
          </Button>
        </div>
      </Form>

      {/* Modal: Update Email */}
      <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update your e-mail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Current Name</Form.Label>
              <Form.Control
                type="text"
                value={updateData.originalName}
                onChange={(e) => setUpdateData({ ...updateData, originalName: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Current e-mail</Form.Label>
              <Form.Control
                type="email"
                value={updateData.originalEmail}
                onChange={(e) => setUpdateData({ ...updateData, originalEmail: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>New Name</Form.Label>
              <Form.Control
                type="text"
                value={updateData.newName}
                onChange={(e) => setUpdateData({ ...updateData, newName: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>New e-mail</Form.Label>
              <Form.Control
                type="email"
                value={updateData.newEmail}
                onChange={(e) => setUpdateData({ ...updateData, newEmail: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowUpdateModal(false)}>
            Cancel
          </Button>
          <Button variant="dark" className="submit-button" onClick={handleUpdateEmail}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal: Forgot Email */}
      <Modal show={showForgotModal} onHide={handleCloseForgotModal}>
        <Modal.Header closeButton>
          <Modal.Title>Forgot my e-mail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="forgotNome">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={forgotNome}
              onChange={(e) => setForgotNome(e.target.value)}
              required
            />
          </Form.Group>
          {foundEmail && (
            <div className="mt-3">
              <strong>Email found:</strong> <br />
              <span>{foundEmail}</span>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseForgotModal}>
            Close
          </Button>
          <Button variant="dark" className="submit-button" onClick={handleFindEmail}>
            Find Email
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal: Custom Alert */}
      <Modal show={showAlertModal} onHide={closeCustomAlert}>
        <Modal.Header closeButton>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{alertMessage}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={closeCustomAlert}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SubscribeForm;
