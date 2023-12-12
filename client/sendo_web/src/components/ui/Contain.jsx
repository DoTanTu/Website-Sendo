import React from "react";
import Card from "./Card";

export default function Contain() {
  return (
    <div className="  flex flex-wrap  w-full  shadow-sm p-2">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
