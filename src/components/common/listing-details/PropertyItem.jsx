const PropertyItem = (props) => {
  return (
    <ul className="mb0">
      <li className="list-inline-item">
        <a href="#">{props.property.projecttype}</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Beds: {props.property.HighlightIcon?.BedsRange}</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Baths: {props.property.HighlightIcon?.BathRange}</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Sq Ft: {props.property.HighlightIcon?.SqftRange}</a>
      </li>
    </ul>
  );
};

export default PropertyItem;
