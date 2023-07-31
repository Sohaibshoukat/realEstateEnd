import Header from "../../common/header/DefaultHeader";
import MobileMenu from "../../common/header/MobileMenu";
import PopupSignInUp from "../../common/PopupSignInUp";
import Link from "next/link";
import Footer from "../../common/footer/Footer";
import CopyrightFooter from "../../common/footer/CopyrightFooter";
import style from "./StylingAgency.module.css"
import { useContext } from "react";
import DeveloperContext from "../../../Context/Developer/DeveloperContext";


const index = () => {
    const developercontext = useContext(DeveloperContext)
    const {developer} = developercontext

    return (
        <>
            {/* <!-- Main Header Nav --> */}
            <Header />

            {/* <!--  Mobile Menu --> */}
            <MobileMenu />

            {/* <!-- Modal --> */}
            <PopupSignInUp />

            <section className="out-listing bgc-f7 pb30-991 md-mt0">
                <div className="container">
                    <div className="row">
                        <div className="content_Developer text-center">
                            <h1>Pakistani Develeopers</h1>
                        </div>
                        <div className={`${style.Developers_list}`}>
                            {/* <h1>soahib</h1> */}
                            {developer.map((item)=>(
                                <div className={`${style.contain}`}>
                                    <div className={`${style.image_developer}`}>
                                        <Link href={`/agency-details/${item._id}`} className={`${style.Developer_list_link}`}>
                                            <a>
                                                <img src={item.DevLog} className={`${style.Image}`} />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Our Footer --> */}
            <section className="footer_one">
                <div className="container">
                    <div className="row">
                        <Footer />
                    </div>
                </div>
            </section>

            {/* <!-- Our Footer Bottom Area --> */}
            <section className="footer_middle_area pt40 pb40">
                <div className="container">
                    <CopyrightFooter />
                </div>
            </section>
        </>
    );
};

export default index;
