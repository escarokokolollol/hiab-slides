import React from "react";
import {Link} from "react-router-dom";

const ForwardButton = props => {
  return (
    <div>
      <Link to={props.toWhere}>
        `{'>'}`
      </Link>
    </div>
  );
};

export default ForwardButton;
