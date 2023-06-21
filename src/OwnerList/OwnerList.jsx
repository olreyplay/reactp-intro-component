import React from "react";

const OwnerList = ({ data }) => {
  return (
    <div>
      <h2>Owners</h2>
      <ul>
        {data.map(({ id, name, vehicle }) => (
          <li key={id}>
            <h3>{name}</h3>
            <p>{vehicle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OwnerList;
