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

function Main() {
  return (
    <div className="container-fluid homepage">
      <div className="row">
        <div
          className="col bannerback"
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
          <img src="/imaggroup.png" alt="image-group" className="groupimage" />
          <div className="bannertitle">Find books and manager support</div>
          <span className="bannerdec">
            Magically match with the right NDIS support workers
          </span>
        </div>
      </div>
      <div className="row nextsection d-flex justify-content-center align-items-center">
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
      <div className="row">
        <Participate />
      </div>
      <div className="row mt-3">
        <Resources />
      </div>
      <div className="row mt-5">
        <Faq />
      </div>
      <div className="row">
        <Footer />
      </div>
      <div className="row">
        <Mainfooter />
      </div>
    </div>
  );
}
export default Main;
