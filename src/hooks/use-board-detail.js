import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBoard } from "../store/boardSlice";
import { useParams } from "react-router-dom";

const useBoardDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, error, record } = useSelector((state) => state.board);

  useEffect(() => {
    dispatch(fetchBoard(id));
  }, [dispatch, id]);

  return { loading, error, record };
};

export default useBoardDetail;
