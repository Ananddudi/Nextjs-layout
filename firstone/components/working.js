import { BsChevronRight } from "react-icons/bs";
function Working() {
  return (
    <section className="d-flex justify-content-center mt-5 flex-column">
      <span className="h1 text-center" style={{ fontWeight: 600 }}>
        So how does it work?
      </span>
      <span
        className="text-center text-muted"
        style={{ fontWeight: 400, fontSize: "18px", width: "100%" }}
      >
        Simplify how you find and manage your Support Workers. Everything in one
        place
        <br /> - desktop or app
      </span>
      <div className="d-flex justify-content-lg-around justify-content-center mt-lg-5 flex-column flex-lg-row">
        <div>
          <ul style={{ listStyleType: "none", fontWeight: 600 }}>
            <li className="d-flex align-items-center">
              <span className="d-flex mx-lg-4">
                <img
                  src="/listfile.png"
                  alt="listimage"
                  className="perticularimageis"
                />
                <span
                  style={{ fontSize: "32px" }}
                  className="position-absolute align-self-center mx-3 "
                >
                  1
                </span>
              </span>
              <span className="mx-2">Join free, post a job or search</span>
            </li>
            <li className="d-flex align-items-center">
              <span className="d-flex mx-lg-4">
                <img
                  src="/listfilemuted.png"
                  alt="listimage"
                  className="perticularimageis"
                />
                <span
                  style={{ fontSize: "32px" }}
                  className="position-absolute align-self-center mx-3 text-muted"
                >
                  2
                </span>
              </span>
              <span className="text-muted mx-2 mx-lg-0">
                View Support Worker profiles
              </span>
            </li>
            <li className="d-flex align-items-center">
              <span className="d-flex mx-lg-4">
                <img
                  src="/listfilemuted.png"
                  alt="listimage"
                  className="perticularimageis"
                />
                <span
                  style={{ fontSize: "32px" }}
                  className="position-absolute text-muted align-self-center mx-3 "
                >
                  3
                </span>
              </span>
              <span className="text-muted mx-2 mx-lg-0">
                In-person or online interviews
              </span>
            </li>
            <li className="d-flex align-items-center">
              <span className="d-flex mx-lg-4">
                <img
                  src="/listfilemuted.png"
                  alt="listimage"
                  className="perticularimageis"
                />
                <span
                  style={{ fontSize: "32px" }}
                  className="position-absolute align-self-center mx-3 text-muted "
                >
                  4
                </span>
              </span>
              <span className="text-muted mx-2 mx-lg-0">
                Book and manage your team
              </span>
            </li>
          </ul>
          <div className="d-none d-lg-flex justify-content-start align-items-center pt-2 px-4">
            <div>
              <button type="button" className="border-0 bg-transparent">
                <span className="tryitfreebutton">Try for Free</span>
              </button>
            </div>
            <div>
              <button
                style={{ color: "#006b72", fontWeight: 600 }}
                type="button"
                className="border-0 bg-transparent mx-4"
              >
                Tour the Platform <BsChevronRight style={{ fontSize: "80%" }} />
              </button>
            </div>
          </div>
        </div>
        <img src="./mobile.png" alt="mobile" className="d-lg-none" />
        <img
          className="img-fluid d-none d-lg-block"
          src="./working.png"
          alt="working-image"
          width="505px"
          height="400px"
        />
      </div>
      <div className="d-flex d-lg-none justify-content-center align-items-center flex-column">
        <div className="w-100">
          <button type="button" className="border-0 tryitfreebutton">
            <span>Get Started</span>
          </button>
        </div>
        <div>
          <button
            style={{ color: "#006b72", fontWeight: 600, letterSpacing: "1px" }}
            type="button"
            className="border-0 bg-transparent mx-4 my-4"
          >
            Tour the Platform <BsChevronRight style={{ fontSize: "80%" }} />
          </button>
        </div>
      </div>
    </section>
  );
}
export default Working;
