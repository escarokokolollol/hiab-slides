import React from "react";
import { Link } from "react-router-dom";

const BackButton = props => {
  return (
    <div>
      <Link to={props.toWhere}>
        `{'<'}`
      </Link>
    </div>
  );
};

export default BackButton;
