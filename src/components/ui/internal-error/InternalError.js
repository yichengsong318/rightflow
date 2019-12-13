import React from "react";
import { Link } from "react-router-dom";
import { NAVIGATION } from "constants/constants";

export default function InternalError() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="uppercase font-bold">Internal error</h1>
      <p className="my-4 text-lg">
        Something went wrong currently. Come back a while please...
      </p>
      <p className="my-4">
        <Link to={NAVIGATION.HOME}>Go home</Link>
      </p>
    </div>
  );
}
