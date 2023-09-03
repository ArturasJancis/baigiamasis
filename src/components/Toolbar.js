import React from 'react';

const Toolbar = ({ onAddAnimal, onShowFavorites, onLogout }) => {
  return (
    <div className="toolbar">
      <button className="btn btn-primary" onClick={onAddAnimal}>Add Animal</button>
      <button onClick={onShowFavorites}>Favorite Animals</button>
      <span className="favorite-count">(0)</span>
      <div className="right-buttons">
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Toolbar;
