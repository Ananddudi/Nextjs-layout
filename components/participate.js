import { BsChevronRight } from "react-icons/bs";
function Participate() {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center">
      <header className="h2" style={{ fontWeight: 600 }}>
        What Participants Say?
      </header>
      <div className="d-flex justify-content-around align-items-center mt-5">
        <div className="d-flex justify-content-center align-items-center w-25">
          <img src="./participate.png" alt="participates" />
          <img
            src="./videoimage.png"
            alt="videoimage"
            className="position-absolute"
            width="50%"
          />
        </div>
        <div
          className="my-3"
          style={{
            marginLeft: "40%",
            fontSize: "16px",
            wordSpacing: "1px",
            lineHeight: "30px",
          }}
        >
          <div>
            “I can access Support Workers for
            <br /> my family, pick the times, and talk
            <br /> to them in one convenient app.
            <br /> It’s so easy.”
          </div>
          <div className="my-3" style={{ fontWeight: 600 }}>
            Sarah - NDIS Parent
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
            See more stories <BsChevronRight style={{ width: "10px" }} />
          </button>
        </div>
      </div>
    </section>
  );
}
export default Participate;
