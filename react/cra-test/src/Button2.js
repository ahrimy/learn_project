import React from "react";
import Style from "./Button2.module.css";
import cn from "classnames";

function Button({ size }) {
  const isBig = size === "big";
  return (
    <button
      className={cn(Style.Button, {
        [Style.big]: isBig,
        [Style.small]: isBig,
      })}
    >
      {isBig ? "큰 버튼" : "작은 버튼"}
    </button>
  );
}
export default Button;
