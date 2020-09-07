import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SiteNav = () => {
  const Nav = styled.nav`
    z-index: 400;
    width: 100%;
    padding: 0px;
    position: fixed;
    background: #000;
    bottom: 0;
    left: 0;
    text-align: center;
    ul {
      padding: 4px;
      margin: 0;
      li {
        text-transform: uppercase;
        display: inline;
        padding: 0;
        margin-right: 10px;
        a {
          font-weight: 700;
          color: #fff;
        }
      }
    }
  `;

  return (
    <Nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pageone">one</Link>
        </li>
        <li>
          <Link to="/pagetwo">two</Link>
        </li>
        <li>
          <Link to="/pagethree">three</Link>
        </li>
        <li>
          <Link to="/result">result</Link>
        </li>
      </ul>
    </Nav>
  );
};
export default SiteNav;
