import React from "react";
import "./CheckboxFilter.css"

function CheckboxFilter({ filterClasses, onCheckboxChange }) {
  return (
    <div className="ui segment" id="container">
      <div>
        <label htmlFor="all">All</label>
        <input
          type="checkbox"
          name="all"
          checked={filterClasses.all}
          onChange={onCheckboxChange}
        />
      </div>
      <div>
        <label htmlFor="Assault">Assault</label>
        <input
          type="checkbox"
          name="Assault"
          checked={filterClasses.Assault}
          onChange={onCheckboxChange}
        />
      </div>
      <div>
        <label htmlFor="Defender">Defender</label>
        <input
          type="checkbox"
          name="Defender"
          checked={filterClasses.Defender}
          onChange={onCheckboxChange}
        />
      </div>
      <div>
        <label htmlFor="Support">Support</label>
        <input
          type="checkbox"
          name="Support"
          checked={filterClasses.Support}
          onChange={onCheckboxChange}
        />
      </div>
      <div>
        <label htmlFor="Medic">Medic</label>
        <input
          type="checkbox"
          name="Medic"
          checked={filterClasses.Medic}
          onChange={onCheckboxChange}
        />
      </div>
      <div>
        <label htmlFor="Witch">Witch</label>
        <input
          type="checkbox"
          name="Witch"
          checked={filterClasses.Witch}
          onChange={onCheckboxChange}
        />
      </div>
      <div>
        <label htmlFor="Captain">Captain</label>
        <input
          type="checkbox"
          name="Captain"
          checked={filterClasses.Captain}
          onChange={onCheckboxChange}
        />
      </div>
    </div>
  );
}

export default CheckboxFilter;