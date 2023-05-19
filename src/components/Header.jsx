import { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "../pages/Login";

const Header = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="header">
      <h1>CRUD APP</h1>
      <ul className="nav">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/post/add">Add Post</NavLink>
        </li>
        <li className="login">
          <NavLink onClick={() => setModalShow(true)}>Login</NavLink>
          <Login show={modalShow} onHide={() => setModalShow(false)} />
        </li>
      </ul>
    </div>
  );
};

export default Header;
