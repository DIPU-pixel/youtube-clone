import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="p-5 shadow-lg col-span-1 w-15">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold p-1">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold p-1">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
