import React from "react";
import { Link } from "react-router-dom";

const LinkToAnywhere = props => {
  return (
    <div>
      <Link to={props.toWhere} >
        {props.text && props.text}
        {props.children && props.children}
      </Link>
    </div>
  );
};

export default LinkToAnywhere;
