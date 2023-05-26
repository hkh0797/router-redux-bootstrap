import * as Yup from "yup";

export const postSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "please insert at least 2 characters!")
    .max(50, "please insert maximum 50 characters!")
    .required("Title is required"),
  description: Yup.string().required("Required"),
});

export const boardSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "please insert at least 2 characters!")
    .max(50, "please insert maximum 50 characters!")
    .required("Title is required"),
  author: Yup.string().required("Required"),
  contents: Yup.string().required("Required"),
});
