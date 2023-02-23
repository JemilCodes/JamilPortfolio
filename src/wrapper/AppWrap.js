import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text" style={{ color: "#313bac", fontSize: "1em" }}>
              @2022 Jemil
            </p>
            <p className="p-text" style={{ color: "#313bac", fontSize: "1em" }}>
              All rights reserved
            </p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
