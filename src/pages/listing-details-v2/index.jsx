import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import ListingDetailsV2 from "../../components/listing-details-v2";
import style from "./Inner_style.module.css"

const index = (props) => {
  return (
    <>
      <Seo pageTitle="Listing Single – Details V2" />
      <div
       className={`${style.pop_style_box} contain_listing`}>
        <ListingDetailsV2 handleModel={props.handleModel} itemId={props.itemId} />
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });



