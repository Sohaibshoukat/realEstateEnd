import React from "react";
import style from "./navbarPopUp.module.css";

const Gifs = () => {
  const [hoveredItem, setHoveredItem] = React.useState(null);

  const gifs = [
    {
      id: 1,
      name: "Mahad Shahbaz",
      title: "Manager",
      img: "/assets/images/Gifs/agent1.jpg",
    },
    {
      id: 2,
      name: "Ammar Yasir",
      title: "Partner",
      img: "/assets/images/Gifs/agent2.jpg",
    },
    {
      id: 3,
      name: "Fatima Tahir",
      title: "Invester",
      img: "/assets/images/Gifs/agent3.jpg",
    },
  ];

  const handleMouseEnter = (item) => {
    setHoveredItem(item); // Update the hoveredItem state
  };

  const handleMouseLeave = () => {
    setHoveredItem(null); // Clear the hoveredItem state when mouse leaves
  };

  return (
    <div className={style.Gifs_items}>
      {gifs?.map((item) => {
        return (
          <div
            className={`${style.Gif_item} tooltip-link`}
            key={item.id}
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={style.Gif_img}>
              <img src={item.img} alt="" />
            </div>
            <h2>{item.name}</h2>
            <div className={`${style.hover_box} tooltip-text`}>
              <p>
                <b>Name : </b>
                {item.name}
              </p>
              <p>
                <b>Posr : </b>
                {item.title}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gifs;
