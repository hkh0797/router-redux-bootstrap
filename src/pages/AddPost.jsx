import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { insertPost } from "../store/postSlice";
import withGuard from "../util/withGuard";
import { useFormik } from "formik";
import { postSchema } from "../util/valiationSchema";

import { Button, Form } from "react-bootstrap";
import Loading from "../components/Loading";

const AddPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.posts);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: postSchema,
    onSubmit: (values) => {
      const id = Math.floor(Math.random() * 500);
      dispatch(
        insertPost({ id, title: values.title, description: values.description })
      )
        .unwrap()
        .then(() => {
          navigate("/");
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
      <Form.Group className="mb-3" controlId="ctrl.Textarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
          isInvalid={!!formik.errors.description}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.description}
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

export default withGuard(AddPost);
