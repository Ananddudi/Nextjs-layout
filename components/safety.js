import { BsCheck2, BsChevronRight } from "react-icons/bs";

function Safety() {
  return (
    <section className="d-flex justify-content-center align-items-start mt-5 ">
      <div className="mx-5">
        <header className="h2" style={{ fontWeight: 600 }}>
          Safety first & always!
        </header>
        <div className="mt-4">
          Every Support Worker is pre-verified, so you know who to
          <br /> trust. We look for people who are genuinely passionate
          <br /> about helping others. Book who you like, cancel anytime.
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
        <button
          type="button"
          className="border-2 bg-transparent my-3"
          style={{
            borderColor: "#006b72",
            borderRadius: "13px",
            padding: "2%",
            paddingRight: "25px",
            paddingLeft: "25px",
            color: "#006b72",
            fontWeight: 600,
          }}
        >
          Find out more <BsChevronRight style={{ width: "10px" }} />
        </button>
      </div>
      <img
        src="./safety.png"
        className="mx-5"
        alt="sfty"
        style={{
          width: "500px",
          height: "400px",
        }}
      />
    </section>
  );
}
export default Safety;
