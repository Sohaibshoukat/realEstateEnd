import Link from "next/link";
import find from "../../data/find";
import { useDispatch } from "react-redux";
import { 
  addPropertyType,
  addLocation,
  addKeyword
} from "../../features/properties/propertiesSlice";

const LookingItem = () => {
  const dispatch = useDispatch();
  return (
    <>
        <Link  href="/listing-map-v4">
        <li className="list-inline-item" 
        onClick={(e) => dispatch(addPropertyType("Commercial"))}>
          <div className="icon">
            <span className="flaticon-house"></span>
            <p>Commercial</p>
          </div>
        </li>
        </Link>
        <Link  href="/listing-map-v4">
        <li className="list-inline-item"
        onClick={(e) => dispatch(addPropertyType("Appartment"))}>
          <div className="icon">
            <span className="flaticon-home"></span>
            <p>Appartment</p>
          </div>
        </li>
        </Link>
        <Link  href="/listing-map-v4">
        <li className="list-inline-item"
        onClick={(e) => dispatch(addPropertyType("Pent House"))}>
          <div className="icon">
            <span className="flaticon-house-2"></span>
            <p>Pent House</p>
          </div>
        </li>
        </Link>
        <Link  href="/listing-map-v4">
        <li className="list-inline-item"
        onClick={(e) => dispatch(addPropertyType("Town Villas"))}>
          <div className="icon">
            <span className="flaticon-building"></span>
            <p>Town Villas</p>
          </div>
        </li>
        </Link>
        <Link  href="/listing-map-v4">
        <li className="list-inline-item"
        onClick={(e) => dispatch(addLocation("Johar Town"))}>
          <div className="icon">
            <span className="flaticon-building"></span>
            <p>Johar Town</p>
          </div>
        </li>
        </Link>
        <Link  href="/listing-map-v4">
        <li className="list-inline-item"
        onClick={(e) => dispatch(addLocation("Bahria Town"))}>
          <div className="icon">
            <span className="flaticon-building"></span>
            <p>Bahria Town</p>
          </div>
        </li>
        </Link>
        <Link  href="/listing-map-v4">
        <li className="list-inline-item"
        onClick={(e) => dispatch(addKeyword("Al-Kareem Town"))}>
          <div className="icon">
            <span className="flaticon-building"></span>
            <p>Al-Kareem Town</p>
          </div>
        </li>
        </Link>
        <Link  href="/listing-map-v4">
        <li className="list-inline-item"
        onClick={(e) => dispatch(addKeyword("Raheem Garden"))}>
          <div className="icon">
            <span className="flaticon-building"></span>
            <p>Raheem Garden</p>
          </div>
        </li>
        </Link>
    </>
  );
};

export default LookingItem;
