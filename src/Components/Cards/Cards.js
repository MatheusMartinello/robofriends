import React from "react";

const Cards = ({ id, name, email }) => {
  return (
    <div className="tc bg-washed-red   dib br3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
};
export default Cards;
