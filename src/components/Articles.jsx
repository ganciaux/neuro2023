import React from "react";
import { useNavigate } from "react-router-dom";

export function Articles() {
  let navigate = useNavigate();

  return (
    <>
      <div>Articles</div>
      <button onClick={() => navigate("/clients")}>client</button>
    </>
  );
}
