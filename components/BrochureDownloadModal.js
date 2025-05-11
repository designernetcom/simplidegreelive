import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const BrochureDownloadModal = ({
  show,
  handleClose,
  brochureUrl,
  universityName,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Log form data (for debugging or API integration)
    console.log("Form submitted:", formData);

    // Trigger brochure download
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.download = `${universityName}-Brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset form and close modal
    setFormData({ name: "", email: "", phone: "" });
    setErrors({});
    handleClose();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      style={{ fontFamily: "Arial, sans-serif" }}
      dialogClassName="modal-md"
    >
      <Modal.Header style={{ borderBottom: "none", paddingBottom: "0" }}>
        <Modal.Title
          style={{ fontSize: "1.5rem", fontWeight: "600", color: "#1f2937" }}
        >
          Download Brochure
        </Modal.Title>
        <button
          type="button"
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "none",
            border: "none",
            color: "#9ca3af",
            cursor: "pointer",
            transition: "color 0.2s",
          }}
          onClick={handleClose}
          onMouseOver={(e) => (e.currentTarget.style.color = "#4b5563")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#9ca3af")}
        >
          <svg
            style={{ width: "1.5rem", height: "1.5rem" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </Modal.Header>
      <Modal.Body style={{ paddingTop: "0.5rem", paddingBottom: "1.5rem" }}>
        <Form onSubmit={handleSubmit} noValidate>
          <Form.Group style={{ marginBottom: "1rem" }} controlId="formName">
            <Form.Label
              style={{
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#374151",
                display: "block",
                textAlign: "left",
              }}
            >
              Full Name
            </Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              style={{
                display: "block",
                width: "100%",
                padding: "0.5rem 1rem",
                border: errors.name ? "1px solid #ef4444" : "1px solid #d1d5db",
                borderRadius: "0.5rem",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                fontSize: "1rem",
                outline: "none",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#3b82f6";
                e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.3)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = errors.name
                  ? "#ef4444"
                  : "#d1d5db";
                e.target.style.boxShadow = "0 1px 2px rgba(0, 0, 0, 0.05)";
              }}
            />
            {errors.name && (
              <p
                style={{
                  marginTop: "0.25rem",
                  fontSize: "0.875rem",
                  color: "#ef4444",
                  textAlign: "left",
                }}
              >
                {errors.name}
              </p>
            )}
          </Form.Group>
          <Form.Group style={{ marginBottom: "1rem" }} controlId="formEmail">
            <Form.Label
              style={{
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#374151",
                display: "block",
                textAlign: "left",
              }}
            >
              Email Address
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              style={{
                display: "block",
                width: "100%",
                padding: "0.5rem 1rem",
                border: errors.email
                  ? "1px solid #ef4444"
                  : "1px solid #d1d5db",
                borderRadius: "0.5rem",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                fontSize: "1rem",
                outline: "none",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#3b82f6";
                e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.3)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = errors.email
                  ? "#ef4444"
                  : "#d1d5db";
                e.target.style.boxShadow = "0 1px 2px rgba(0, 0, 0, 0.05)";
              }}
            />
            {errors.email && (
              <p
                style={{
                  marginTop: "0.25rem",
                  fontSize: "0.875rem",
                  color: "#ef4444",
                  textAlign: "left",
                }}
              >
                {errors.email}
              </p>
            )}
          </Form.Group>
          <Form.Group style={{ marginBottom: "1.5rem" }} controlId="formPhone">
            <Form.Label
              style={{
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#374151",
                display: "block",
                textAlign: "left",
              }}
            >
              Mobile Number
            </Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              required
              style={{
                display: "block",
                width: "100%",
                padding: "0.5rem 1rem",
                border: errors.phone
                  ? "1px solid #ef4444"
                  : "1px solid #d1d5db",
                borderRadius: "0.5rem",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                fontSize: "1rem",
                outline: "none",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#3b82f6";
                e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.3)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = errors.phone
                  ? "#ef4444"
                  : "#d1d5db";
                e.target.style.boxShadow = "0 1px 2px rgba(0, 0, 0, 0.05)";
              }}
            />
            {errors.phone && (
              <p
                style={{
                  marginTop: "0.25rem",
                  fontSize: "0.875rem",
                  color: "#ef4444",
                  textAlign: "left",
                }}
              >
                {errors.phone}
              </p>
            )}
          </Form.Group>
          <Button
            type="submit"
            style={{
              display: "block",
              width: "100%",
              backgroundColor: "#000",
              color: "#ffffff",
              fontSize: "1rem",
              fontWeight: "600",
              padding: "0.5rem 1rem",
              border: "none",
              borderRadius: "0.5rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              transition: "background-color 0.2s, box-shadow 0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#1d4ed8";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#2563eb";
              e.target.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
            }}
            onFocus={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 0 3px rgba(59, 130, 246, 0.3)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
            }}
          >
            Download Brochure
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default BrochureDownloadModal;
