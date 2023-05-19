import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navi = useNavigate();

  return (
    <Container>
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
          <div className="mt-5 text-center">
            <h1>앗..!</h1>
            <p>에러가 발생 하였습니다.</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
            <Button variant="link" onClick={() => navi("/", { replace: true })}>
              홈으로
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
