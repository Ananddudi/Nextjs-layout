import { BsChevronRight } from "react-icons/bs";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Footer from "./footer";

function Faq() {
  return (
    <section
      className="d-flex justify-content-center align-items-center flex-column"
      style={{
        marginTop: "20%",
        width: "1400px",
        height: "888px",
        backgroundImage: `url(${"/faq.png"})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="d-flex w-75 justify-content-between"
        style={{ marginTop: "-30%" }}
      >
        <div
          className="card shadow"
          style={{ borderRadius: "24px", width: "300px", height: "350px" }}
        >
          <div className="card-body d-flex justify-content-center align-items-center flex-column">
            <div className="d-flex justify-content-end align-items-end my-1">
              <img src="./userback.png" alt="cool" />
              <img src="./user1.png" alt="nice" className="position-absolute" />
            </div>
            <div className="my-3">NDIS Participants</div>
            <div className="text-center">
              Find the right Support Workers, build and manage your own dream
              team.
            </div>
            <span>
              <button
                style={{ color: "#006b72", fontWeight: 600 }}
                type="button"
                className="border-0 bg-transparent mx-4 my-2"
              >
                Learn More <BsChevronRight style={{ fontSize: "80%" }} />
              </button>
            </span>
          </div>
        </div>

        <div
          className="card shadow"
          style={{ borderRadius: "24px", width: "300px", height: "350px" }}
        >
          <div className="card-body d-flex justify-content-center align-items-center flex-column">
            <div className="d-flex justify-content-end align-items-end my-1">
              <img src="./userback2.png" alt="cool" />
              <img src="./user2.png" alt="nice" className="position-absolute" />
            </div>
            <div className="my-3">Support Coordinators</div>
            <div className="text-center">
              Help your Clients with great Support Workers, all with our
              complimentary assistance.
            </div>
            <span>
              <button
                style={{ color: "#006b72", fontWeight: 600 }}
                type="button"
                className="border-0 bg-transparent mx-4 my-2"
              >
                Learn More <BsChevronRight style={{ fontSize: "80%" }} />
              </button>
            </span>
          </div>
        </div>

        <div
          className="card shadow"
          style={{ borderRadius: "24px", width: "300px", height: "350px" }}
        >
          <div className="card-body d-flex justify-content-center align-items-center flex-column">
            <div className="d-flex justify-content-end align-items-end my-1">
              <img src="./userback3.png" alt="cool" />
              <img src="./user3.png" alt="nice" className="position-absolute" />
            </div>
            <div className="my-3">Support Workers</div>
            <div className="text-center">
              List a profile, spruke your service, build your reputation and
              work with Participants.
            </div>
            <span>
              <button
                style={{ color: "#006b72", fontWeight: 600 }}
                type="button"
                className="border-0 bg-transparent mx-4 my-2"
              >
                Learn More <BsChevronRight style={{ fontSize: "80%" }} />
              </button>
            </span>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center flex-column align-items-center w-75 mt-5">
        <div className="my-5 h1" style={{ fontWeight: 600 }}>
          You might have seen us on...
        </div>
        <div className="d-flex justify-content-between w-100">
          <img src="./7News.png" alt="sevennews" className="newsicon" />
          <img src="./news.png" alt="news" className="newsicon" />
          <img src="./9News.png" alt="news9" className="newsicon" />
          <img src="./newsfirst.png" alt="newsfirst" className="newsicon" />
        </div>
        <div className="my-5 w-75">
          <div
            className="w-100 d-flex justify-content-between border-bottom my-4 border-warning"
            style={{ fontWeight: 600 }}
          >
            Find Support Near You
            <div className="d-flex justify-content-center align-items-center my-1">
              <img src="./faqarrow.png" alt="faqarrow" width="70%" />
              <AiOutlineDown className="position-absolute" />
            </div>
          </div>
          <div
            className="w-100 d-flex justify-content-between border-bottom my-4 border-warning"
            style={{ fontWeight: 600 }}
          >
            Find Support Specialists
            <div className="d-flex justify-content-center align-items-center my-1">
              <img src="./faqarrow.png" alt="faqarrow" width="70%" />
              <AiOutlineDown className="position-absolute" />
            </div>
          </div>
          <div
            className="w-100 d-flex justify-content-between border-bottom my-4 border-warning"
            style={{ fontWeight: 600 }}
          >
            Types of Support
            <div className="d-flex justify-content-center align-items-center my-1">
              <img src="./faqarrow.png" alt="faqarrow" width="70%" />
              <AiOutlineDown className="position-absolute" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Faq;
