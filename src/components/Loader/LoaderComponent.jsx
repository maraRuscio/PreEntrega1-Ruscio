import React from "react"
import { Ripples } from "@uiball/loaders"
import "./Loader.css"

export const LoaderComponent = () => {
  return (
    <div className="styles">
      <Ripples
        size={100}
        speed={1}
        color="Black"
      />
    </div>
  );
};
export default LoaderComponent