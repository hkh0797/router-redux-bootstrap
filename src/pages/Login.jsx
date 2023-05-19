import { Modal } from "react-bootstrap";
import "../style/Login.css";

const Login = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contain-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contain-modal-title-vcenter">Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label>Email : </label>
        <input type="email" placeholder="test@example.com" />
      </Modal.Body>
    </Modal>
  );
};
export default Login;
