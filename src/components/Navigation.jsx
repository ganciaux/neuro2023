import React from "react";
import { Outlet, Link } from "react-router-dom";

export function Navigation({ Children }) {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/clients">Clients</Link>
      <Link to="/articles">Article</Link>
      <Outlet />
    </>
  );
}
