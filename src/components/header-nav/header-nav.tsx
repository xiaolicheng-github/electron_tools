import React from "react";
import "./header-nav.scss";

interface IProps {
  title?: string;
  back?: () => void;
}

export default function HeaderNav(props: IProps) {
  function handleBack() {
    if (props?.back) {
      props?.back?.();
    } else {
      window.history.back();
    }
  }

  return (
    <div className="header-nav-component">
      <span className="back-btn" onClick={() => handleBack()}>
        <span className="icon-class icon-fanhui"></span>
      </span>
      <span className="nav-content">{props.title || ""}</span>
    </div>
  );
}
