import { useState } from "react";

const FloorPlans = (props) => {
  const [openFloorPlan, setOpenFloorPlan] = useState(null);

  const handleToggle = (id) => {
    if (openFloorPlan === id) {
      setOpenFloorPlan(null);
    } else {
      setOpenFloorPlan(id);
    }
  };

  return (
    <div className="accordion" id="accordionExample">
      {props.property.floorPlan &&
        props.property.floorPlan.map((item, index) => {
          const id = `floor-plan-${index}`;
          const isOpen = openFloorPlan === id;
          return (
            <div className="card floor_plan" key={id}>
              <div id={`heading-${id}`}>
                <h2 className="mb-0">
                  <button
                    className="btn btn-link accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${id}`}
                    aria-expanded={isOpen ? "true" : "false"}
                    aria-controls={id}
                    onClick={() => handleToggle(id)}
                  >
                    <ul className="mb0 d-flex align-items-center flex-wrap">
                      <li className="d-inline-flex list-inline-item">
                        {item.Title}
                      </li>
                    </ul>
                  </button>
                </h2>
              </div>
              <div
                id={id}
                className={`collapse ${isOpen ? "show" : ""}`}
                aria-labelledby={`heading-${id}`}
                data-bs-parent="#accordionExample"
              >
                <div className="card-body text-center">
                  <img className="img-fluid" src={item.FloorImage} alt={`Floor plan for ${item.number}`} />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default FloorPlans;
