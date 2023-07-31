import { set } from "mongoose";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useEffect, useState } from "react";
import DeveloperContext from "../../Context/Developer/DeveloperContext";


const DescriptionsText = (props) => {
  const developercontext = useContext(DeveloperContext)
  const {developer} = developercontext

  const [agency, setAgencyItem] = useState({});
  const id = props.id;
  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else setAgencyItem(developer.find((item) => item._id == id));
    return () => {};
  }, [id]);

  return (
    <>
      {agency?.Overview && agency?.Overview.map((Elem) =>
            <>
              <h3 className="title mb-3">{Elem.Title}</h3>
              <p className="mb25">{Elem.Description}</p>
            </>
        )}
    </>
  );
};

export default DescriptionsText;
