import { GrLocation } from "react-icons/gr";
function Best() {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center mt-5">
      <header className="h1" style={{ fontWeight: 600 }}>
        Work with only the best
      </header>
      <article className="d-flex justify-content-around mt-5 w-100">
        <div
          style={{ borderRadius: "19px" }}
          className="card d-flex cardwh justify-content-center align-items-center flex-column shadow-lg"
        >
          <img
            src="./sarah.png"
            alt="sarah"
            className="my-1 mt-3"
            style={{ width: "170px", height: "170px" }}
          />
          <div className="card-body">
            <div
              className="card-title text-center"
              style={{ fontWeight: 600, fontSize: "22px" }}
            >
              Sarah
            </div>
            <div className="card-text">
              I love getting outdoors and
              <br /> working with people to
              <br /> achieve their fitness goals.
              <div className="text-center mt-2" style={{ fontWeight: 600 }}>
                <GrLocation />
                <span className="mx-2 pt-1">Toowoomba, QLD</span>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ borderRadius: "19px" }}
          className="cardwh card d-flex justify-content-center align-items-center flex-column shadow-lg"
        >
          <img
            src="./Mikhail.png"
            alt="sarah"
            className="my-1 mt-3"
            style={{ width: "170px", height: "170px" }}
          />
          <div className="card-body">
            <div
              className="card-title text-center"
              style={{ fontWeight: 600, fontSize: "22px" }}
            >
              Mikhail
            </div>
            <div className="card-text">
              I really enjoy tutoring,
              <br /> playing soccer, and
              <br /> sharing my love of
              <div className="text-center mt-2" style={{ fontWeight: 600 }}>
                <GrLocation />
                <span className="mx-2 pt-1">Goldcoast, QLD</span>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ borderRadius: "19px" }}
          className="cardwh card d-flex justify-content-center align-items-center flex-column shadow-lg"
        >
          <img
            src="./rachel.png"
            alt="sarah"
            className="my-1 mt-3"
            style={{ width: "170px", height: "170px" }}
          />
          <div className="card-body">
            <div
              className="card-title text-center"
              style={{ fontWeight: 600, fontSize: "22px" }}
            >
              Rachel
            </div>
            <div className="card-text">
              I love helping kids build
              <br /> confidence and grow their
              <br /> independence.
              <div className="text-center mt-2" style={{ fontWeight: 600 }}>
                <GrLocation />
                <span className="mx-2 pt-1">Goldcoast, QLD</span>
              </div>
            </div>
          </div>
        </div>
      </article>
      <button type="button" className="workwithbutton my-5 ">
        <span style={{ fontSize: "22px" }}>Try for Free</span>
      </button>
    </section>
  );
}
export default Best;
