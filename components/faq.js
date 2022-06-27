import { useState } from "react";
import { BsChevronRight, BsController } from "react-icons/bs";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { UnmountClosed } from "react-collapse";

function Faq() {
  var [toggle, setToggle] = useState({
    first: false,
    second: false,
    third: false,
  });

  return (
    <section
      className="d-flex justify-content-center align-items-center flex-column"
      style={{
        marginTop: "20%",
        height: "888px",
        backgroundImage: `url(${"/faq.png"})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="d-flex w-75 justify-content-between flex-column flex-lg-row align-items-center align-items-lg-start cardPosition">
        <div
          className="card shadow mb-3 mb-md-0"
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
          className="card shadow mb-3 mb-md-0"
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
          className="card shadow mb-3 mb-md-0"
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

      <div className="d-flex justify-content-center flex-column align-items-center mt-5 faqwidth">
        <div className="my-lg-5 h1" style={{ fontWeight: 600 }}>
          You might have seen us on...
        </div>
        <div className="d-none d-lg-flex justify-content-between w-100">
          <img src="./7News.png" alt="sevennews" className="newsicon" />
          <img src="./news.png" alt="news" className="newsicon" />
          <img src="./9News.png" alt="news9" className="newsicon" />
          <img src="./newsfirst.png" alt="newsfirst" className="newsicon" />
        </div>
        <div className="d-lg-none d-flex flex-column align-items-center w-100">
          <div className="d-flex justify-content-around w-100">
            <img src="./7News.png" alt="sevennews" className="newsicon" />
            <img src="./news.png" alt="news" className="newsicon" />
          </div>
          <div className="d-flex justify-content-around w-100 mt-5">
            <img src="./9News.png" alt="news9" className="newsicon" />
            <img src="./newsfirst.png" alt="newsfirst" className="newsicon" />
          </div>
        </div>
        <div className="my-5 w-75">
          <div className="border-bottom border-warning">
            <div
              className="w-100 d-flex justify-content-between my-3"
              style={{ fontWeight: 600 }}
            >
              <button
                className="border-0 bg-transparent fw-bold"
                onClick={(e) =>
                  setToggle({
                    first: !toggle.first,
                    second: false,
                    third: false,
                  })
                }
              >
                Find Support Near You
              </button>
              <div className="d-flex justify-content-center align-items-center my-1">
                <img src="./faqarrow.png" alt="faqarrow" width="70%" />
                {toggle.first ? (
                  <AiOutlineUp className="position-absolute" />
                ) : (
                  <AiOutlineDown className="position-absolute" />
                )}
              </div>
            </div>
            <UnmountClosed isOpened={toggle.first} id="1">
              <div className="d-flex my-2">
                <div className="spanspaces m-1">
                  <span>Support Workers in Sydney</span>
                  <span>Support Workers in Melbourne</span>
                  <span>Support Workers in Brisbane</span>
                  <span>Support Workers in Perth</span>
                  <span>Support Workers in Adelaide</span>
                </div>
                <div className="m-1">
                  <span>Support Workers in Gold Coast</span>
                  <span>Support Workers in Melbourne</span>
                  <span>Support Workers in Brisbane</span>
                  <span>Support Workers in Perth</span>
                  <span>Support Workers in Adelaide</span>
                </div>
                <div className="m-1">
                  <span>Support Workers in Toowoomba</span>
                  <span>Support Workers in Melbourne</span>
                  <span>Support Workers in Brisbane</span>
                  <span>Support Workers in Perth</span>
                  <span>Support Workers in Adelaide</span>
                </div>
              </div>
            </UnmountClosed>
          </div>
          <div className="border-bottom border-warning">
            <div
              className="w-100 d-flex justify-content-between my-3"
              style={{ fontWeight: 600 }}
            >
              <button
                className="border-0 bg-transparent fw-bold"
                onClick={() =>
                  setToggle({
                    first: false,
                    second: !toggle.second,
                    third: false,
                  })
                }
              >
                Find Support Specialists
              </button>
              <div className="d-flex justify-content-center align-items-center my-1">
                <img src="./faqarrow.png" alt="faqarrow" width="70%" />
                {toggle.second ? (
                  <AiOutlineUp className="position-absolute" />
                ) : (
                  <AiOutlineDown className="position-absolute" />
                )}
              </div>
            </div>
            <UnmountClosed isOpened={toggle.second} id="2">
              <div className="d-flex my-2">
                <div className="spanspaces m-1">
                  <span>Support Workers in Sydney</span>
                  <span>Support Workers in Melbourne</span>
                  <span>Support Workers in Brisbane</span>
                  <span>Support Workers in Perth</span>
                  <span>Support Workers in Adelaide</span>
                </div>
                <div className="m-1">
                  <span>Support Workers in Gold Coast</span>
                  <span>Support Workers in Melbourne</span>
                  <span>Support Workers in Brisbane</span>
                  <span>Support Workers in Perth</span>
                  <span>Support Workers in Adelaide</span>
                </div>
                <div className="m-1">
                  <span>Support Workers in Toowoomba</span>
                  <span>Support Workers in Melbourne</span>
                  <span>Support Workers in Brisbane</span>
                  <span>Support Workers in Perth</span>
                  <span>Support Workers in Adelaide</span>
                </div>
              </div>
            </UnmountClosed>
          </div>
          <div className="border-bottom border-warning">
            <div
              className="w-100 d-flex justify-content-between my-3"
              style={{ fontWeight: 600 }}
            >
              <button
                className="border-0 bg-transparent fw-bold"
                onClick={() =>
                  setToggle({
                    first: false,
                    second: false,
                    third: !toggle.third,
                  })
                }
              >
                Types of Support
              </button>
              <div className="d-flex justify-content-center align-items-center my-1">
                <img src="./faqarrow.png" alt="faqarrow" width="70%" />
                {toggle.third ? (
                  <AiOutlineUp className="position-absolute" />
                ) : (
                  <AiOutlineDown className="position-absolute" />
                )}
              </div>
            </div>
            <UnmountClosed isOpened={toggle.third} id="2">
              <div className="d-flex my-2">
                <div className="spanspaces m-1">
                  <span>Support Workers in Sydney</span>
                  <span>Support Workers in Melbourne</span>
                  <span>Support Workers in Brisbane</span>
                  <span>Support Workers in Perth</span>
                  <span>Support Workers in Adelaide</span>
                </div>
                <div className="m-1">
                  <span>Support Workers in Gold Coast</span>
                  <span>Support Workers in Melbourne</span>
                  <span>Support Workers in Brisbane</span>
                  <span>Support Workers in Perth</span>
                  <span>Support Workers in Adelaide</span>
                </div>
                <div className="m-1">
                  <span>Support Workers in Toowoomba</span>
                  <span>Support Workers in Melbourne</span>
                  <span>Support Workers in Brisbane</span>
                  <span>Support Workers in Perth</span>
                  <span>Support Workers in Adelaide</span>
                </div>
              </div>
            </UnmountClosed>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Faq;
