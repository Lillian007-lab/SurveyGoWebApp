import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import logo from "../img/icon32.png";

import "../css/styles.css";

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
            <a href="/auth/google" className="HeaderTextColor">
              Login With Google
            </a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ marginLeft: "15px" }}>
            Credits: {props.auth1.credits}
          </li>,
          <li key="2">
            <a href="/api/logout" className="HeaderTextColor">
              Logout
            </a>
          </li>,
        ];
    }
  };

  return (
    <nav>
      <div className="nav-wrapper Header">
        <Link
          to={props.auth1 ? "/surveys" : "/"}
          className="left brand-logo"
          style={{ color: "#e8d5b5" }}
        >
          <img src={logo} alt="logo" className="material-icons HeaderLogo" />
          SurveyGo
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
