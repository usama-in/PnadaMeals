import React from "react";
import classes from "./modal.module.css";
import ReactDom from "react-dom";

const BackDrop = ({onClick}) => {
 
  return <div className={classes.backdrop} onClick={onClick}></div>;
};
const OverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const fregId = document.getElementById("overlays");

  return (
    <>
      {ReactDom.createPortal(<BackDrop onClick={props.onClick} />, fregId)}
      {ReactDom.createPortal(<OverLay> {props.children} </OverLay>, fregId)}
    </>
  );
};

export default Modal;
