import { BsCheck2, BsChevronRight } from "react-icons/bs";

function Safety() {
  return (
    <section className="d-flex justify-content-center align-items-lg-start align-items-center flex-column flex-lg-row mt-5">
      <img
        src="./safety.png"
        className="mx-5 d-lg-none"
        alt="sfty"
        style={{
          width: "324px",
          height: "255px",
        }}
      />
      <div className="mx-lg-5 my-3 my-lg-0">
        <header className="h1 d-none d-lg-block" style={{ fontWeight: 600 }}>
          Safety first & always!
        </header>
        <header
          className="h1 text-center d-lg-none"
          style={{ fontWeight: 600 }}
        >
          Your safety comes first
        </header>
        <div className="mt-4 d-none d-lg-block">
          Every Support Worker is pre-verified, so you know who to
          <br /> trust. We look for people who are genuinely passionate
          <br /> about helping others. Book who you like, cancel anytime.
        </div>
        <div className="mt-4 d-lg-none">
          We screen every Support Worker so you know who to trust. We look for
          people who are genuinely passionate about helping others. Book who you
          like and cancel anytime.
        </div>
        <div className="d-flex flex-column mt-4">
          <span>
            <BsCheck2 className="mx-1 my-3" style={{ color: "green" }} />{" "}
            National Police Check
          </span>
          <span>
            <BsCheck2 className="mx-1 my-3" style={{ color: "green" }} />{" "}
            Government Photo ID
          </span>
          <span>
            <BsCheck2 className="mx-1 my-3" style={{ color: "green" }} />{" "}
            CPR/First Aid Certificate
          </span>
          <span>
            <BsCheck2 className="mx-1 my-3" style={{ color: "green" }} /> ABN
            Registered
          </span>
        </div>
        <div>
          <button
            type="button"
            className="border-2 bg-transparent my-3 safetybutton"
          >
            Find out more <BsChevronRight style={{ width: "10px" }} />
          </button>
        </div>
      </div>
      <img
        src="./safety.png"
        className="mx-5 safetyimage d-none d-lg-block"
        alt="sfty"
      />
    </section>
  );
}
export default Safety;
