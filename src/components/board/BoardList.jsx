import { memo } from "react";
import { Table } from "react-bootstrap";
import BoardListItem from "./BoardListItem";

const BoardList = ({ data, deleteRecord, isLoggedIn, handleChange }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              name="allselect"
              checked={!data.some((data) => data?.isChecked !== true)}
              onChange={handleChange}
            />
          </th>
          <th>#</th>
          <th style={{ width: "70%" }}>Title</th>
          <th style={{ width: "10%" }}>Author</th>
          <th style={{ width: "15%" }}></th>
        </tr>
      </thead>
      <tbody>
        <BoardListItem
          data={data}
          deleteRecord={deleteRecord}
          isLoggedIn={isLoggedIn}
          handleChange={handleChange}
        />
      </tbody>
    </Table>
  );
};

export default memo(BoardList);
