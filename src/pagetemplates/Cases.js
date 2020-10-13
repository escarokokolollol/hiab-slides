import React, { useState } from "react";
import styled from "styled-components";

//////////////////
//
//  PROPS:
//  title
//  text
//  text
//  efferAnswerTitle
//  efferAnswerText
//  hiabAnswerTitle
//  hiabAnswerText
//
//////////////////

// components 
import AnswerWrapper from "../components/AnswerWrapper";

// images 
import EfferLogo from "../assets/icons/effer-logo.svg";
import HiabLogo from "../assets/icons/hiab-logo.svg";

const StyledDiv = styled.div`
  position: relative;
  div.black-box{
    background: rgba(0,0,0,0.9);
    padding: 40px 60px;
    h1.question-title{
    }
    p.question-text{
      font-size: 22px;
      line-height: 26px;
    }
    div.answer-wrapper{
      p.answer-wrapper-text{
        margin-bottom: 10px;
        font-weight: 800;
        font-size: 22px;
      }
      img{
        padding: 0px 8px;
        width:150px;
        transition: all .1s ease;
        margin-right: 26px;
      }
      img:hover{
        transition: all .2s ease;
        transform: scale(1.06);
        cursor: pointer;
      }
    }
  }
  .answer-wrapper-wrapper{
    position: absolute;
    bottom: -110px;
    right: -240px;
    width: 500px;
  }  
  @media ${props => props.theme.firstBreakpoint}{
    width: 80%;
  }
  @media ${props => props.theme.secondBreakpoint}{
    width: 62%;
    div.black-box{
      h1.question-title{
        font-size: 38px;
      }
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    max-width: 970px;
    width: 60%;
    div.black-box{
      h1.question-title{
        font-size: 58px;
      }
    }
  }
`;

const Cases = props => {
  const [efferAnswer, setEfferAnswer] = useState(false);
  const [hiabAnswer, setHiabAnswer] = useState(false);

  const toggleAnswers = (whichAnswer) =>{
    if(whichAnswer == "effer"){
      setHiabAnswer(false);
      setEfferAnswer(true);
    }else {
      setEfferAnswer(false);
      setHiabAnswer(true);
    }
  }

  return(
    <StyledDiv>
      <div className="black-box">
        {props.title ? <h1 className="question-title">{props.title}</h1> : ""}
        {props.text ? <p className="question-text"><i>{props.text}</i></p> : ""}
        <div className="answer-wrapper">
          <p className="answer-wrapper-text">Which brand would you pitch?</p>
          <img 
            style={efferAnswer ? { background: "#fff"} : {}}
            src={EfferLogo} 
            alt="effer logo" 
            onClick={() => toggleAnswers("effer")}
          />
          <img 
            style={hiabAnswer ? { background: "#fff"} : {}}
            src={HiabLogo} 
            alt="hiab logo"
            onClick={() => toggleAnswers("hiab") }
          />
        </div>
      </div>

      {efferAnswer ? 
        <div className="answer-wrapper-wrapper">
          <AnswerWrapper title={props.efferAnswerTitle} text={props.efferAnswerText} textAlignLeft={true}/>
        </div>
      : ""}
      {hiabAnswer ? 
        <div className="answer-wrapper-wrapper">
          <AnswerWrapper title={props.hiabAnswerTitle} text={props.hiabAnswerText} textAlignLeft={true}/>
        </div>
      : ""}
    </StyledDiv>
  );
}

export default Cases;