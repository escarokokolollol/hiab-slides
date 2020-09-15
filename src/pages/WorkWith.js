import React from "react";
import styled from "styled-components";

// components
import LinkToAnywhere from "../components/LinkToAnywhere";

// assets 
import ImageSource01 from "../assets/images/waltco-truck01.jpg";
import ImageSource02 from "../assets/images/waltco-truck02.jpg";

const WorkWith = () => {

    const StyledDiv = styled.div`
        h1{
            position: absolute;
            top: 0;
            width: 100%;
            display: flex;
            justify-content: center;
            z-index: 99;
            margin-top: 40px;
        }
        .HiabBackground , .EfferBackground{
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: url(${ImageSource01});
            background-size: cover;
            height: 50vh;
            width: 100vw;
        }
        .EfferBackground{
            background-image: url(${ImageSource02});
        }

        a{
            font-size: 90px;
            color: #fff;
        }
        
        .back-button{
            position: absolute;
            bottom: 20px;
            width: 100%;
            display: flex;
            justify-content: center;
            z-index: 99;
            a{
                font-size: 20px;
            }
        }

        @media (min-width: 960px) {
            .HiabBackground , .EfferBackground{
                float: left;
                height: 100vh;
                width: 50vw;
            }
        }
    `;

    return (
        <div className="page-transition">
            <StyledDiv>
                <h1 className="text-center">I WORK WITH</h1>
                <LinkToAnywhere toWhere="/about-hiab/page01">
                    <div className="HiabBackground">
                        EFFER
                    </div>
                </LinkToAnywhere>
                <LinkToAnywhere toWhere="/about-effer/page01">
                    <div className="EfferBackground">
                        Hiab
                    </div>
                </LinkToAnywhere>
                <div className="back-button">
                    <LinkToAnywhere toWhere="/" text="Tillbaka"/>
                </div>
            </StyledDiv>
        </div>
    );
}

export default WorkWith;