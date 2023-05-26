import { memo } from "react";
import { Form, Table } from "react-bootstrap";
import BoardListItem from "./BoardListItem";

const BoardList = ({ data, deleteRecord, isLoggedIn, offset, limit }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>
            <Form.Check type={"checkbox"} />
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
          offset={offset}
          limit={limit}
        />
      </tbody>
    </Table>
  );
};

export default memo(BoardList);
