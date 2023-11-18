import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routerParams } from "../../utils/router";
import "./home.scss";

export default function Home() {
  const navigate = useNavigate();

  const [routeList] = useState([
    { path: "/monaco", name: "monaco", icon: "icon-code" },
    { path: "/test1", name: "test1", icon: "icon-ceshi" },
    { path: "/test2", name: "test2", icon: "icon-ceshi" },
  ]);

  function handleClick(item: { path: any; name?: string }) {
    navigate(
      ...routerParams({
        path: item.path,
        query: {},
      })
    );
  }

  return (
    <div className="home-page">
      <div className="tool-list">
        {routeList.map((item, index) => (
          <div key={index} className="tool-list-item" onClick={() => handleClick(item)}>
            <span className={`icon-class ${item.icon}`}></span>
            <div className="item-title">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
