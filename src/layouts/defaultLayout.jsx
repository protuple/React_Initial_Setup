import React from "react";

export default function defaultLayout(props) {
  return (
    <div className="min-h-screen h-auto bg-gray-900 text-white">
      {props.children}
    </div>
  );
}
