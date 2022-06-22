import Header from "./header";
import NextSection from "./nextsection";
import RightSupport from "./rightsupport";
import Working from "./working";
import Ndis from "./ndis";
import Best from "./best";
import Safety from "./safety";
import Support from "./support";
import Participate from "./participate";
import Resources from "./resources";
import Faq from "./faq";
import Footer from "./footer";
import Mainfooter from "./mainfooter";
import Submenu from "./submenu";
import { useSelector } from "react-redux";

function Main() {
  const show_submenu = useSelector((state) => state.show_submenu);
  return (
    <div className="container-fluid homepage">
      <div className="row">
        <div
          className="bannerback"
          style={{
            backgroundImage: `url(${"/Intersect.png"})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="row">
            <Header />
          </div>
          {show_submenu && (
            <div>
              <Submenu />
            </div>
          )}

          <div className="bannertitle text-lg-start">
            Find books and manager support
          </div>
          <div className="bannerdec text-lg-start text-wrap bannerwidth">
            Magically match with the right NDIS support workers
          </div>
          <button
            type="button"
            className="d-lg-none border-0 px-5 py-3 w-100 mt-2 bg-white"
            style={{
              borderRadius: "15px",
              color: "#006C73",
              fontWeight: 600,
              fontSize: "22px",
            }}
          >
            Try for Free
          </button>
          <div>
            <img
              src="/imaggroup.png"
              alt="image-group"
              className="groupimage"
            />
          </div>
        </div>
      </div>
      <div className="row nextsection">
        <NextSection />
      </div>
      <div className="row justify-content-center">
        <RightSupport />
      </div>

      <div className="row justify-content-center mt-5">
        <Working />
      </div>

      <div className="row">
        <Ndis />
      </div>

      <div className="row">
        <Best />
      </div>

      <div className="row">
        <Safety />
      </div>

      <div className="row">
        <Support />
      </div>

      <div className="mfromtop row">
        <Participate />
      </div>
      <div className="row mt-3 d-none d-lg-block">
        <Resources />
      </div>
      <div className="mfromtoptwo row mt-5">
        <Faq />
      </div>
      <div className="mfromtoptwo row">
        <Footer />
      </div>
      <div className="mfromtoptwo row ">
        <Mainfooter />
      </div>
    </div>
  );
}
export default Main;
