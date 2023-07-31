const PropertyDetails = (props) => {
  return (
    <>
      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Property ID : <span>{props.property.id}</span>
            </p>
          </li>
          <li>
            <p>
              Price : <span>${props.property.price}</span>
            </p>
          </li>
          <li>
            <p>
              Property Size : <span>{props.property.itemDetails&&props.property.itemDetails[2].number}Sq Ft</span>
            </p>
          </li>
          <li>
            <p>
              Year Built : <span>{props.property.built}</span>
            </p>
          </li>
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Bedrooms : <span>{props.property.itemDetails&&props.property.itemDetails[0].number}</span>
            </p>
          </li>
          <li>
            <p>
              Bathrooms : <span>{props.property.itemDetails&&props.property.itemDetails[1].number}</span>
            </p>
          </li>
          <li>
            <p>
              Garage : <span>{props.property.garages}</span>
            </p>
          </li>
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Property Type : <span>{props.property.type}</span>
            </p>
          </li>
          <li>
            <p>
              Property Status : <span>{props.property.status}</span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PropertyDetails;
