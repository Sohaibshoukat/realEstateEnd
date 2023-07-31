const Attachments = (props) => {
  return (
    <>
      <div className="icon_box_area style2">
        <div className="score" style={{ cursor: "pointer" }}>
          <a href={props.property.Docoument} download>
            <span className="flaticon-pdf text-thm fz30"></span>
          </a>
        </div>
        <div className="details">
          <a href={props.property.Docoument} download>
            <h5>
              <span className="flaticon-download text-thm pr10"></span>Download
              Document
            </h5>
          </a>
        </div>
      </div>
      {/* End .icon_box_area */}
    </>
  );
};

export default Attachments;
