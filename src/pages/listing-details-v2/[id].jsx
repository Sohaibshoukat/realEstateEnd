import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ListingDetailsV2 from "../../components/listing-details-v2";
import style from "./Inner_style.module.css"

const ListingDynamicDetailsV2 = () => {
  const router = useRouter();
  const id = router.query.id;

  // useEffect(() => {
  //   if (!id) <h1>Loading...</h1>;
  //   else setProperty(properties?.find((item) => item.id == id));

  //   return () => {};
  // }, [id]);
  return (
    <>
      <div className={style.popUpStyling}>
        <Seo pageTitle="Listing Single – Details V2" />
        <div
        className="listing_style"
        >
          <ListingDetailsV2 itemId={id} />
        </div>
      </div>
    </>
  );
};

export default ListingDynamicDetailsV2;
