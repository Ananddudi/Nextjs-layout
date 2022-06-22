import { BsChevronRight } from "react-icons/bs";
function Participate() {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center mt-3 mt-lg-0">
      <header className="h2" style={{ fontWeight: 600 }}>
        What Participants Say?
      </header>
      <div className="d-flex justify-content-lg-around align-items-center mt-lg-5 flex-column flex-lg-row">
        <div className="d-flex justify-content-center align-items-center w-25 minuswidth">
          <img
            src="./participate.png"
            alt="participates"
            className="imagebackres"
          />
          <img
            src="./videoimage.png"
            alt="videoimage"
            className="position-absolute imageofparticipate"
          />
        </div>
        <div className="my-3 participatedec">
          <div className="posabs">
            “I can access Support Workers for
            <br /> my family, pick the times, and talk
            <br /> to them in one convenient app.
            <br /> It’s so easy.”
          </div>
          <div className="my-3 centerthetext" style={{ fontWeight: 600 }}>
            Sarah - NDIS Parent
          </div>
          <button
            type="button"
            className="border-2 bg-transparent my-3 fullwidths"
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
            See more stories <BsChevronRight style={{ width: "10px" }} />
          </button>
        </div>
      </div>
    </section>
  );
}
export default Participate;
