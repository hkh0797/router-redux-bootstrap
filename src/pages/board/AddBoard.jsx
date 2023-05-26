import { useDispatch, useSelector } from "react-redux";
import withGuard from "../../util/withGuard";
import { insertBoard } from "../../store/boardSlice";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { boardSchema } from "../../util/valiationSchema";
import { Button, Form } from "react-bootstrap";
import Loading from "../../components/Loading";

const AddBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.board);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: boardSchema,
    onSubmit: (values) => {
      const idx = Math.floor(Math.random() * 500);
      dispatch(
        insertBoard({
          idx,
          title: values.title,
          author: values.author,
          contents: values.contents,
        })
      )
        .unwrap()
        .then(() => {
          navigate("/board/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="ctrl.Input1">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          isInvalid={!!formik.errors.title}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.title}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="ctrl.Input2">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          name="author"
          value={formik.values.author}
          onChange={formik.handleChange}
          isInvalid={!!formik.errors.author}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.author}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="ctrl.Textarea1">
        <Form.Label>contents</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="contents"
          onChange={formik.handleChange}
          value={formik.values.contents}
          isInvalid={!!formik.errors.contents}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.contents}
        </Form.Control.Feedback>
      </Form.Group>
      <Loading loading={loading} error={error}>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Loading>
    </Form>
  );
};

export default withGuard(AddBoard);
