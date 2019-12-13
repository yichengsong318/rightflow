import React from "react";
import { Link } from "react-router-dom";
import { NAVIGATION } from "constants/constants";

export default function Forbidden() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="uppercase font-bold">Forbidden</h1>
      <p className="my-4 text-lg">Content not found </p>
      <p className="my-4">
        <Link to={NAVIGATION.HOME}>Go home</Link>
      </p>
    </div>
  );
}
