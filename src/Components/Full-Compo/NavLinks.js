import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";
// import { useAuth } from "../hooks/auth-hook";
// import { useContext } from "react";
// import { AuthContext } from "../context/auth-context";

const NavLinks = (props) => {
  const auth = false; //   useContext(AuthContext);
  useEffect(() => {
    if (auth.userName) {
      console.log(auth.userName);
    }
    return () => {};
  }, [props]);
  return (
    <ul className="nav-links flex flex-row">
      {props.drawerOpen && (
        <NavLink to="/">
          <div style={{ marginBottom: "90px" }}>
            {" "}
            <img
              className="logoSize"
              src="https://res.cloudinary.com/dcvnw6hvt/image/upload/v1591904335/zsgc9lzxenzocefwvuvx.png"
              alt="WUANDOO logo"
            ></img>
          </div>
        </NavLink>
      )}
      {auth.userName ? (
        <React.Fragment>
          <li className="nav-user nav-font">
            <NavLink to={`/dashboard`}>{auth.userName}</NavLink>
          </li>
          <li className="nav-user exit">
            <NavLink className="exit" to="/">
              {" "}
            </NavLink>
          </li>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* <li className="nav-el">
            <NavLink to={`/`}>QUÉ HACEMOS</NavLink>
          </li> */}
          <li className="nav-el">
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "white" : 'white',
                background: isActive ? "var(--color-indigo)" : "none",
              })}
              className="text-sm font-bold"
              to="/cliente"
            >
              demo
            </NavLink>
          </li>
          <li className="nav-el">
            <NavLink 
              style={({ isActive }) => ({
                color: isActive ? "white" : 'white',
                background: isActive ? "var(--color-indigo)" : "none",
              })}
            to="/contact">contacto</NavLink>
          </li>
        </React.Fragment>
      )}
    </ul>
  );
};

export default NavLinks;
