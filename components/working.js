import { BsChevronRight } from "react-icons/bs";
function Working() {
  return (
    <section className="d-flex justify-content-center mt-5 flex-column">
      <span className="h1 text-center" style={{ fontWeight: 600 }}>
        So how does it work?
      </span>
      <span
        className="text-center text-muted"
        style={{ fontWeight: 400, fontSize: "18px" }}
      >
        Simplify how you find and manage your Support Workers. Everything in one
        place
        <br /> - desktop or app
      </span>
      <div className="d-flex justify-content-around mt-5">
        <div>
          <ul style={{ listStyleType: "none", fontWeight: 600 }}>
            <li className="shadow d-flex align-items-center">
              <span className="d-flex mx-4">
                <img src="/listfile.png" alt="listimage" />
                <span
                  style={{ fontSize: "32px" }}
                  className="position-absolute align-self-center mx-3"
                >
                  1
                </span>
              </span>
              <span className="">Join free, post a job or search</span>
            </li>
            <li className="d-flex align-items-center">
              <span className="d-flex mx-4">
                <img src="/listfilemuted.png" alt="listimage" />
                <span
                  style={{ fontSize: "32px" }}
                  className="position-absolute align-self-center mx-3 text-muted"
                >
                  2
                </span>
              </span>
              <span className="text-muted">View Support Worker profiles</span>
            </li>
            <li className="d-flex align-items-center">
              <span className="d-flex mx-4">
                <img src="/listfilemuted.png" alt="listimage" />
                <span
                  style={{ fontSize: "32px" }}
                  className="position-absolute text-muted align-self-center mx-3 "
                >
                  3
                </span>
              </span>
              <span className="text-muted">In-person or online interviews</span>
            </li>
            <li className="d-flex align-items-center">
              <span className="d-flex mx-4">
                <img src="/listfilemuted.png" alt="listimage" />
                <span
                  style={{ fontSize: "32px" }}
                  className="position-absolute align-self-center mx-3 text-muted "
                >
                  4
                </span>
              </span>
              <span className="text-muted">Book and manage your team</span>
            </li>
          </ul>
          <div className="d-flex justify-content-start align-items-center pt-2 px-4">
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
                Tour the Platform <BsChevronRight style={{ fontSize: "80%" }} />
              </button>
            </span>
          </div>
        </div>
        <img
          className="img-fluid"
          src="./working.png"
          alt="working-image"
          width="505px"
          height="400px"
        />
      </div>
    </section>
  );
}
export default Working;
