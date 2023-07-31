import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Home4 from "../components/home-4";
import { useContext, useEffect } from "react";
import VillaContext from "../Context/TownVilla/TownVillaContext";

const index = () => {
  const villcontext = useContext(VillaContext)

  console.log('Context value',villcontext)
  const {villa,getVillas}=villcontext
  useEffect(() => {
    console.log("coming");
    getVillas();
  }, [])
  
  return (
    <>
      <Seo pageTitle="Home" />
      <Home4 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
