import React from "react";
import "./loadingpage.css";
import { Spinner } from "./Spinner";

const LoadingPage: React.FC = () => {
  return (
    <div className="contSpinner">
      <Spinner />
    </div>
  );
};

export default LoadingPage;
