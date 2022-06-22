function Support() {
  return (
    <section className="my-5">
      <div className="d-flex justify-content-lg-center align-items-center flex-column supportbackground">
        <header
          className="h2 my-5 my-lg-2 centerthetext mx-5 mx-lg-0"
          style={{ fontWeight: 600, letterSpacing: "1px" }}
        >
          Simpler, faster, personalised support
        </header>
        <div
          className="my-lg-4 mx-5 mx-lg-0 centerthetext"
          style={{ fontWeight: 400, letterSpacing: "1px", color: "#FFFFFF" }}
        >
          Find the right support workers for your interests and NDIS goals.
        </div>
        <div className="d-flex w-100 justify-content-around my-4 flex-column flex-lg-row">
          <div>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="./supporticon.png"
                alt="supporticon"
                className="imagewidthis"
              />
              <span
                className="position-absolute"
                style={{ fontSize: "40px", fontWeight: 600 }}
              >
                95%
              </span>
            </div>
            <div className="pt-lg-3 pt-2 centerthetext textswidth">
              Successful matching
            </div>
          </div>

          <div className="my-3 my-lg-0">
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="./supporticon.png"
                alt="supporticon"
                className="imagewidthis"
              />
              <span
                className="position-absolute"
                style={{ fontSize: "40px", fontWeight: 600 }}
              >
                5 days
              </span>
            </div>
            <div className="pt-lg-3 pt-2 centerthetext textswidth">
              Average hiring time
            </div>
          </div>

          <div>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="./supporticon.png"
                alt="supporticon"
                className="imagewidthis"
              />
              <span
                className="position-absolute"
                style={{ fontSize: "40px", fontWeight: 600 }}
              >
                3,000+
              </span>
            </div>
            <div className="pt-lg-3 pt-2 centerthetext textswidth">
              Verified Support Workers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Support;
