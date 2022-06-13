function Support() {
  return (
    <section className="my-5">
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{
          width: "100%",
          height: "473px",
          backgroundImage: `url(${"/Rectangle.png"})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          color: "white",
        }}
      >
        <header
          className="h2 my-2"
          style={{ fontWeight: 600, letterSpacing: "1px" }}
        >
          Simpler, faster, personalised support
        </header>
        <div
          className="my-4"
          style={{ fontWeight: 400, letterSpacing: "1px", color: "#FFFFFF" }}
        >
          Find the right support workers for your interests and NDIS goals.
        </div>
        <div className="d-flex w-100 justify-content-around my-4">
          <div>
            <div className="d-flex justify-content-center align-items-center">
              <img src="./supporticon.png" alt="supporticon" width="70%" />
              <span
                className="position-absolute"
                style={{ fontSize: "40px", fontWeight: 600 }}
              >
                95%
              </span>
            </div>
            <div className="pt-3">Successful matching</div>
          </div>

          <div>
            <div className="d-flex justify-content-center align-items-center">
              <img src="./supporticon.png" alt="supporticon" width="70%" />
              <span
                className="position-absolute"
                style={{ fontSize: "40px", fontWeight: 600 }}
              >
                5 days
              </span>
            </div>
            <div className="pt-3">Average hiring time</div>
          </div>

          <div>
            <div className="d-flex justify-content-center align-items-center">
              <img src="./supporticon.png" alt="supporticon" width="55%" />
              <span
                className="position-absolute"
                style={{ fontSize: "40px", fontWeight: 600 }}
              >
                3,000+
              </span>
            </div>
            <div className="pt-3">Verified Support Workers</div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Support;
