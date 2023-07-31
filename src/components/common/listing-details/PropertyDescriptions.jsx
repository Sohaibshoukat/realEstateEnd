import React, { useState } from "react";

const PropertyDescriptions = (props) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const overviewItems = showAll
    ? props.property?.overview
    : props.property?.overview?.slice(0, 1);

  return (
    <>
      {overviewItems?.map((item, index) => (
        <div key={index}>
          <h4>{item.Title}</h4>
          <p>{item.Description}</p>
        </div>
      ))}
      {props.property?.overview?.length > 1 &&
        (showAll ? (
          <button className="btn btn-thm" onClick={toggleShowAll}>Collapse</button>
        ) : (
          <button className="btn btn-thm" onClick={toggleShowAll}>Read More</button>
        ))}
    </>
  );
};

export default PropertyDescriptions;
