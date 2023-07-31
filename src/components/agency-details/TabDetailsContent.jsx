// import Team from "../agent-view/agent-v2/Team";
import Comments from "../blog-details/Comments";
import Ratings from "../blog-details/Ratings";
import ReviewBox from "../blog-details/ReviewBox";
import DescriptionsText from "./DescriptionsText";
import DevelopedListings from "./DevelopedListings";
import RunningListings from "./RunningListing"

const TabDetailsContent = (props) => {
  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            data-bs-toggle="tab"
            href="#description"
            role="tab"
            aria-controls="description"
            aria-selected="true"
          >
            Description
          </a>
        </li>
        {/* End Description tab */}

        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#Delivered_listing"
            role="tab"
            aria-controls="listing"
            aria-selected="false"
          >
            Delivered Projects
          </a>
        </li>
        {/* End Listing tab */}

        
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#Running_listing"
            role="tab"
            aria-controls="listing"
            aria-selected="false"
          >
            Running Projects
          </a>
        </li>

      </ul>
      {/* End .nav nav-tabs */}

      <div className="tab-content" id="myTabContent2">
        <div
          className="tab-pane fade show active"
          id="description"
          role="tabpanel"
        >
          <div className="product_single_content">
            <div className="mbp_pagination_comments">
              <div className="mbp_first media">
                <div className="media-body agent-desc">
                  <DescriptionsText id={props.id}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Description details content*/}

        <div
          className="tab-pane fade row pl15 pl0-1199 pr15 pr0-1199"
          id="Delivered_listing"
          role="tabpanel"
        >
          {/* <DevelopedListings Developername={props.name}/> */}
        </div>
        {/* End Developed Listing details content*/}

        <div
          className="tab-pane fade row pl15 pl0-1199 pr15 pr0-1199"
          id="Running_listing"
          role="tabpanel"
        >
          {/* <RunningListings  Developername={props.name}/> */}
        </div>

        
      </div>
      {/* End tab-content */}
    </>
  );
};

export default TabDetailsContent;
