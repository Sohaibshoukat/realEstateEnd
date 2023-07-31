import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import Customer from "../../components/Customer/index";

const index = () => {
  return (
    <>
      <Seo pageTitle="Listing - Map V4" />
      <Customer/>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
