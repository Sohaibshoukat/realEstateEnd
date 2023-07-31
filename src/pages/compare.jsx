import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Compare from "../components/compare";
import {useRouter} from "next/router";

const index = () => {
  const router = useRouter()
  const { properties } = router.query

  const ComparingProperties = properties ? JSON.parse(properties) : [];
  return (
    <>
      <Seo pageTitle="Compare" />
      <Compare properties={ComparingProperties}/>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
