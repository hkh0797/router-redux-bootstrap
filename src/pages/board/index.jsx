import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import { fetchBoards, deleteBoard } from "../../store/boardSlice";
import BoardList from "../../components/board/BoardList";
import Pagination from "../../components/Pagination";

const Index = () => {
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.board);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  const deleteRecord = useCallback(
    (idx) => dispatch(deleteBoard(idx)),
    [dispatch]
  );

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allselect") {
      const checkedvalue = records.slice(offset, offset + limit).map((data) => {
        return { ...data, isChecked: checked };
      });
      console.log(checkedvalue);
    }
  };

  return (
    <Loading loading={loading} error={error}>
      <label>
        페이지 당 표시할 게시물 수:&nbsp;
        <select
          type="number"
          value={limit}
          onChange={({ target: { value } }) => setLimit(Number(value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </label>
      <BoardList
        data={records.slice(offset, offset + limit)}
        deleteRecord={deleteRecord}
        isLoggedIn={isLoggedIn}
        offset={offset}
        limit={limit}
        handleChange={handleChange}
      />
      <Pagination
        total={records.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </Loading>
  );
};

export default Index;
