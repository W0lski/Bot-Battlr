import React from "react";

function SortBar({ handleSortChange }) {
  return (
    <div className="ui segment">
      <select className="ui dropdown" onChange={(e) => handleSortChange(e.target.value)}>
        <option value="default">Sort By</option>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
}

export default SortBar;