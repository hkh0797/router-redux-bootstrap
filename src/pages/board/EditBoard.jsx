import { useNavigate } from "react-router-dom";
import useBoardDetail from "../../hooks/use-board-detail";
import { editBoard } from "../../store/boardSlice";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { boardSchema } from "../../util/valiationSchema";
import { Button, Form } from "react-bootstrap";
import withGuard from "../../util/withGuard";
import Loading from "../../components/Loading";

const EditBoard = () => {
  const dispatch = useDispatch();
  const navi = useNavigate();
  const { loading, error, record } = useBoardDetail();

  const formik = useFormik({
    initialValues: {
      title: record ? record?.title : "",
      author: record ? record?.author : "",
      contents: record ? record?.contents : "",
    },
    enableReinitialize: true,
    validationSchema: boardSchema,
    onSubmit: (values) => {
      dispatch(
        editBoard({
          idx: record.idx,
          title: values.title,
          author: values.author,
          contents: values.contents,
        })
      )
        .unwrap()
        .then(() => navi("/board"));
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="ctrl.Input1">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
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
          onChange={formik.handleChange}
          value={formik.values.author}
          isInvalid={!!formik.errors.author}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="ctrl.Textarea1">
        <Form.Label>Contents</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="contents"
          onChange={formik.handleChange}
          value={formik.values.contents}
          isInvalid={!!formik.errors.contents}
        />
      </Form.Group>
      <Loading loading={loading} error={error}>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Loading>
    </Form>
  );
};

export default withGuard(EditBoard);
