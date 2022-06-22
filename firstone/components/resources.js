import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function Resources() {
  return (
    <section className="mt-5 d-flex justify-content-center align-items-center flex-column">
      <header className="h1" style={{ fontWeight: 600 }}>
        Free tips, tricks and resources
      </header>
      <div className="mt-3 mb-5 " style={{ fontWeight: 400 }}>
        Yep, just hit play, start reading, watch and listen to helpful NDIS
        insights!
      </div>

      <div className="d-flex justify-content-around align-items-center">
        <button className="d-flex justify-content-center align-items-center border-0 bg-transparent mb-5">
          <img src="./leftright.png" alt="leftright" />
          <span className="position-absolute">
            <AiOutlineLeft className="iconsizes" />
          </span>
        </button>
        <div className="my-3 d-flex justify-content-between w-75">
          <div
            className="d-flex justify-content-start flex-column mx-2"
            style={{ width: "34%" }}
          >
            <div className="d-flex justify-content-center align-items-center text-center">
              <img
                src="./resource.png"
                alt="yes"
                className="align-self-center border-0"
              />
              <img
                src="./image1.png"
                alt="imageone"
                className="position-absolute rounded "
              />
            </div>
            <header className="mt-2 fw-bold" style={{ fontSize: "20px" }}>
              Our NDIS Community: Sarah and Isabella
            </header>
            <p>24 Jun 2021 • 4 min video</p>
          </div>

          <div
            className="d-flex justify-content-start flex-column mx-2"
            style={{ width: "34%" }}
          >
            <div className="d-flex justify-content-center align-items-center text-center">
              <img
                src="./resource.png"
                alt="yes"
                className="align-self-center border-0"
              />
              <img
                src="./image2.png"
                alt="imageone"
                className="position-absolute rounded "
              />
            </div>
            <header className="mt-2 fw-bold" style={{ fontSize: "20px" }}>
              Our NDIS Community: Jeanette and Joshna
            </header>
            <p>24 Jun 2021 • 4 min video</p>
          </div>

          <div
            className="d-flex justify-content-start flex-column mx-2"
            style={{ width: "34%" }}
          >
            <div className="d-flex justify-content-center align-items-center text-center ">
              <img
                src="./resource.png"
                alt="yes"
                className="align-self-center border-0"
              />
              <img
                src="./image3.png"
                alt="imageone"
                className="position-absolute rounded "
              />
            </div>
            <header className="mt-2 fw-bold" style={{ fontSize: "20px" }}>
              Our NDIS Community: Rebecca and Kelly
            </header>
            <p>24 Jun 2021 • 4 min video</p>
          </div>
        </div>
        <button className="d-flex justify-content-center align-items-center mb-5 border-0 bg-transparent">
          <img src="./leftright.png" alt="leftright" />
          <span className="position-absolute">
            <AiOutlineRight className="iconsizes" />
          </span>
        </button>
      </div>
    </section>
  );
}
export default Resources;
