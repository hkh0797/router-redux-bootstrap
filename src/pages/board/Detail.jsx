import useBoardDetail from "../../hooks/use-board-detail";
import Loading from "../../components/Loading";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const nav = useNavigate();
  const { loading, error, record } = useBoardDetail();

  return (
    <div>
      <Loading loading={loading} error={error}>
        <p>Title: {record?.title}</p>
        <p>Author: {record?.author}</p>
        <p>Contents: {record?.contents}</p>
      </Loading>
      <Button onClick={() => nav(-1)}>뒤로</Button>
    </div>
  );
};

export default Detail;
