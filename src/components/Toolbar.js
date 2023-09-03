import React from "react";
import { Link } from "react-router-dom";

const Toolbar = ({ onLogout, favoritesCount }) => {
  return (
    <div className="toolbar">
      <button className="btn btn-primary">
        <Link to="/animals">All Animals</Link>
      </button>
      <button className="btn btn-primary">
        <Link to="/favorites">Favorite Animals ({favoritesCount})</Link>
      </button>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Toolbar;
