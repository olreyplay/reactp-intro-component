import React from "react";
import data from "../data";
import OwnerList from "../OwnerList/OwnerList";

const App = () => {
  return (
    <div>
      <OwnerList data={data} />
    </div>
  );
};

export default App;
