import { Button, ButtonGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const BoardListItem = ({ data, deleteRecord, isLoggedIn, handleChange }) => {
  const navigate = useNavigate();

  const deleteHandler = (item) => {
    if (window.confirm(`Do you really want to delete record: ${item.title}?`)) {
      deleteRecord(item.idx);
    }
  };

  const records = data.map((el, idx) => (
    <tr key={idx}>
      <td>
        <input
          type="checkbox"
          name={el.title}
          checked={el?.isChecked || false}
          onChange={handleChange}
        />
      </td>
      <td>#{++idx}</td>
      <td>
        <Link to={`/board/${el.idx}`}>{el.title}</Link>
      </td>
      <td>{el.author}</td>
      <td>
        <ButtonGroup aria-label="Basic example">
          <Button
            variant="success"
            onClick={() => navigate(`/board/${el.idx}/edit`)}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            onClick={() => deleteHandler(el)}
            disabled={!isLoggedIn}
          >
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  ));

  return <>{records}</>;
};

export default BoardListItem;
