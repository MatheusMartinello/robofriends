import React from "react";

const searchField = ({ searchField, searchChange }) => {
  return (
    <div className="tc pa3 b--green bg-light-red  dib br3 ma2 bw2 shadow-5">
      <input
        type="search"
        placeholder="search robots"
        className="pa3 b--yellow bg-washed-red "
        onChange={searchChange}
      />
    </div>
  );
};
export default searchField;
