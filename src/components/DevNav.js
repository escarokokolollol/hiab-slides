import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DevNav = () => {
    const StyledNav = styled.nav`
        position: fixed;
        bottom: 4px;
        left: 4px;
        background: #ddd;
        color: #333;
        border-radius: 4px;
        z-index: 9;
        padding: 4px;
            ul{
                padding: 4px 0 0 0;
                margin: 0 0 10px 0;
                li{
                    list-style:none;
                    display: inline;
                    a{
                        font-size: 28px;
                        margin-left: 10px;
                    }
                }
            }
    `;
    return(
        <StyledNav>
            <ul>
                ab-hiab
                <li><Link to="/">0</Link></li>
                <li><Link to="/about-hiab/page01">1</Link></li>
                <li><Link to="/about-hiab/page02">2</Link></li>
                <li><Link to="/about-hiab/page03">3</Link></li>
                <li><Link to="/about-hiab/page04">4</Link></li>
            </ul>
            <ul>
                ab-effer
                <li><Link to="/">0</Link></li>
                <li><Link to="/about-effer/page01">1</Link></li>
                <li><Link to="/about-effer/page02">2</Link></li>
                <li><Link to="/about-effer/page03">3</Link></li>
                <li><Link to="/about-effer/page04">4</Link></li>
            </ul>
        </StyledNav>
    );
}

export default DevNav;