import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import HomeMain from "../components/home-4";
import { useContext, useEffect } from "react";
import VillaContext from "../Context/TownVilla/TownVillaContext";

const index = () => {
  const villcontext = useContext(VillaContext)

  console.log('Context value',villcontext)
  const {getVillas}=villcontext
  useEffect(() => {
    console.log("coming");
    getVillas();
  }, [])

  return (
    <>
      <Seo pageTitle="Home" />
      <HomeMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
