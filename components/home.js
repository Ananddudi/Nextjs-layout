import { useState } from "react";
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
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";

function Main() {
  const show_submenu = useSelector((state) => state.show_submenu);
  const [notification, setNotification] = useState(true);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPopup(true);
    }, 8000);
  }, []);

  return (
    <div className="container-fluid homepage">
      {popup && (
        <div
          style={{ zIndex: 20 }}
          className="d-flex justify-content-center align-items-center position-fixed w-100 h-100 bg-transparent"
        >
          <div className="bg-white popup">
            <div>
              <div className="d-flex justify-content-end">
                <AiOutlineClose
                  onClick={() => setPopup(false)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div>
                <header className="h4" style={{ fontWeight: 900 }}>
                  Subscribe to the Newsletter
                </header>
                <div style={{ fontWeight: 200, fontSize: "14px" }}>
                  Keep up with our NDIS community and get access to useful
                  resources and tips to get the most out of your NDIS.
                </div>
                <div>
                  <form
                    style={{
                      maxWidth: "350px",
                      textAlign: "left",
                    }}
                  >
                    <div className="input-icons mt-4 float=-left">
                      <MdOutlineEmail className="position-absolute mt-3 mx-3 h5" />
                      <input
                        className="input-field px-5"
                        style={{
                          height: "46px",
                          fontSize: "15px",
                          borderRadius: "10px",
                          textAlign: "left",
                          border: "1px solid #9CA1A8",
                        }}
                        type="text"
                        placeholder="Your email address"
                      />
                    </div>
                    <div className="my-4 d-flex align-items-center">
                      <input
                        type="radio"
                        id="html"
                        value="HTML1"
                        style={{ width: "8%", height: "2em" }}
                      />
                      <label for="html" className="mx-2">
                        I’m a NDIS Participant
                      </label>
                    </div>
                    <div className="d-flex align-items-center">
                      <input
                        type="radio"
                        id="html"
                        value="HTML2"
                        style={{ width: "8%", height: "2em" }}
                      />
                      <label for="html" className="mx-2">
                        I’m a Support Worker
                      </label>
                    </div>
                    <div className="widthformobile mt-3">
                      <button
                        type="button"
                        className="border-0 tryitfreebutton mt-3 mt-lg-0"
                      >
                        <span>Try for Free</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {notification && (
        <div className="row" style={{ background: "#FFDE66", fontWeight: 500 }}>
          <div className="d-flex justify-content-between my-1" role="alert">
            <div className="text-center w-100">
              Learn about our response to COVID-19. Click here.
            </div>
            <button
              type="button"
              style={{ transform: "scale(2)" }}
              className="border-0 bg-transparent"
              onClick={() => setNotification(false)}
            >
              <span>&times;</span>
            </button>
          </div>
        </div>
      )}
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
              className={`${notification ? "groupimage2" : "groupimage"}`}
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
