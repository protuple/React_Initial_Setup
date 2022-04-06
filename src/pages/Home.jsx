import React from "react";
import { FaHeartbeat } from "react-icons/fa";
export default function Home(props) {
  return (
    <div>
      <title>{props.title}</title>
      <div className="flex h-screen justify-center flex-col space-y-8 items-center text-6xl font-bold">
        <h1>welcome to protuple</h1>
        <FaHeartbeat className="animate-ping" />
      </div>
    </div>
  );
}
