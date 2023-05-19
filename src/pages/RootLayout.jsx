import { Outlet } from "react-router-dom";

import { Col, Container, Row } from "react-bootstrap";
import Headers from "../components/Header";

const RootLayout = () => {
  return (
    <Container>
      <Headers />
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default RootLayout;
