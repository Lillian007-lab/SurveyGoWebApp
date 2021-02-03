import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

const Header = (props) => {
  // console.log("props from Header");
  // console.log(props);
  const renderRightUpperCorner = () => {
    switch (props.auth1) {
      case null:
        return <li></li>;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ margin: "0 10px" }}>
            Credits: {props.auth1.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={props.auth1 ? "/surveys" : "/"} className="left brand-logo">
          Emaily
        </Link>
        <ul className="right">{renderRightUpperCorner()}</ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return { auth1: state.auth };
};

export default connect(mapStateToProps)(Header);
