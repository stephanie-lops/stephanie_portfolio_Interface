import React, { useState } from "react";
import axios from 'axios';
import { Form, Button, Alert } from "react-bootstrap";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await axios.post("http://localhost:5000/contact", formData);

      if (response.status === 200) {
        setStatus("success");
        setFormData({ nome: "", email: "", mensagem: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
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
            value={formData.nome}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label style={{ fontSize: '20px' }}>E-mail</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your e-mail"
          />
        </Form.Group>

        <Form.Group controlId="formMensagem" className="mb-3">
          <Form.Label style={{ fontSize: '20px' }}>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="mensagem"
            rows={6}
            value={formData.mensagem}
            onChange={handleChange}
            required
            placeholder="Write your message..."
          />
        </Form.Group>

        <Button variant="dark" type="submit" className="submit-button">
          Get in touch
        </Button>

        {status === "success" && (
          <Alert variant="success" className="mt-3">
            Message sent successfully!
          </Alert>
        )}
        {status === "error" && (
          <Alert variant="danger" className="mt-3">
            An error occurred while sending. Please try again.
          </Alert>
        )}
        {status === "sending" && (
          <Alert variant="info" className="mt-3">
            Sending message...
          </Alert>
        )}
      </Form>
    </div>
  );
};

export default ContactForm;
