import { BsChevronRight, BsCheck2 } from "react-icons/bs";

function RightSupport() {
  return (
    <div className="d-flex justify-content-center">
      <div>
        <img src="/therightsupport.png" alt="sideimage" />
      </div>
      <span className="w-50 d-flex justify-content-center">
        <div className="px-4">
          <div className="rightsupportext">
            The right support changes everything
          </div>
          <div className="rightdec text-muted">
            Sick of worker churn, little control, overcharging, too much
            <br /> admin or unknown strangers? There’s a better way...
          </div>
          <div className="d-flex">
            <div className="rightdec2 text-muted">
              <div className="marginfromtop">
                <BsCheck2 color="green" />
                <span className="mx-2">Free and easy to join</span>
              </div>
              <div className="marginfromtop">
                <BsCheck2 color="green" />
                <span className="mx-2">Personalised matching</span>
              </div>
              <div className="marginfromtop">
                <BsCheck2 color="green" />
                <span className="mx-2">Manage your own team</span>
              </div>
              <div className="marginfromtop">
                <BsCheck2 color="green" />
                <span className="mx-2">Happiness guarantee</span>
              </div>
            </div>
            <div className="mx-4">
              <div className="rightdec2 text-muted">
                <div className="marginfromtop">
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
          <div className="d-flex justify-content-start align-items-center pt-5">
            <span>
              <button type="button" className="border-0 bg-transparent">
                <span className="tryitfreebutton">Try for Free</span>
              </button>
            </span>
            <span>
              <button
                style={{ color: "#006b72", fontWeight: 600 }}
                type="button"
                className="border-0 bg-transparent mx-4"
              >
                See Your Inclusions{" "}
                <BsChevronRight style={{ fontSize: "80%" }} />
              </button>
            </span>
          </div>
        </div>
      </span>
    </div>
  );
}
export default RightSupport;
