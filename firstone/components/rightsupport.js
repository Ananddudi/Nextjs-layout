import { BsChevronRight, BsCheck2 } from "react-icons/bs";

function RightSupport() {
  return (
    <div className="d-flex justify-content-center flex-lg-row flex-column align-items-lg-start align-items-center">
      <div>
        <img
          src="/therightsupport.png"
          alt="sideimage"
          className="resimage mx-lg-5"
        />
      </div>
      <div className="w-lg-50 d-flex justify-content-center">
        <div className="px-lg-4">
          <div className="rightsupportext text-center text-lg-start">
            The right support changes everything
          </div>
          <div className="d-lg-none rightdecss mt-3">
            We’re here to help you find Disability Support Workers you trust and
            enjoy spending time with.
          </div>
          <div className="rightdec text-muted d-none d-md-block">
            Sick of worker churn, little control, overcharging, too much
            <br /> admin or unknown strangers? There’s a better way...
          </div>
          <div className="d-flex flex-column flex-lg-row mx-5 mx-lg-0">
            <div className="rightdec2 text-md-muted">
              <div className="marginfromtop liststylesofright">
                <BsCheck2 color="green" />
                <span className="mx-2">Free and easy to join</span>
              </div>
              <div className="marginfromtop liststylesofright">
                <BsCheck2 color="green" />
                <span className="mx-2">Personalised matching</span>
              </div>
              <div className="marginfromtop liststylesofright">
                <BsCheck2 color="green" />
                <span className="mx-2">Manage your own team</span>
              </div>
              <div className="marginfromtop liststylesofright">
                <BsCheck2 color="green" />
                <span className="mx-2">Happiness guarantee</span>
              </div>
            </div>
            <div className="mx-lg-4">
              <div className="rightdec2 text-md-muted">
                <div className="marginfromtop liststylesofright">
                  <BsCheck2 color="green" />
                  <span className="mx-2">Verified workers only</span>
                </div>
                <div className="marginfromtop">
                  <BsCheck2 color="green" />
                  <span className="mx-2">Online booking system</span>
                </div>
                <div className="marginfromtop">
                  <BsCheck2 color="green" />
                  <span className="mx-2">Safer, smarter, simpler</span>
                </div>
                <div className="marginfromtop">
                  <BsCheck2 color="green" />
                  <span className="mx-2">and</span>
                  <span className="text-dark font-weight-bold">
                    1% for Kindness®
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-center pt-lg-5 flex-column flex-lg-row">
            <div className="widthformobile">
              <button
                type="button"
                className="border-0 tryitfreebutton mt-3 mt-lg-0"
              >
                <span>Try for Free</span>
              </button>
            </div>
            <span>
              <button
                style={{ color: "#006b72", fontWeight: 600 }}
                type="button"
                className="border-0 bg-transparent mx-4 my-4 my-lg-0"
              >
                See Your Inclusions{" "}
                <BsChevronRight style={{ fontSize: "80%" }} />
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RightSupport;
