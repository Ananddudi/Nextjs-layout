function NextSection() {
  return (
    <div className="d-flex justify-content-center align-items-lg-center flex-lg-row flex-column">
      <div className="d-flex justify-content-between align-items-lg--center w-lg-75 flex-lg-row flex-column">
        <section className="d-flex w-100 mt-4 mt-lg-0  mx-lg-5">
          <img src="/verifiedimage.png" alt="backverified" />
          <div className="d-flex flex-column mx-2">
            <span className="verifiedtext" style={{ fontWeight: 600 }}>
              Verified Workers
            </span>
            <span>Build your dream team</span>
          </div>
        </section>
        <section className="d-flex w-100 mt-4 mt-lg-0 mx-lg-5">
          <img src="/smart.png" alt="backverified" />
          <div className="d-flex flex-column mx-2">
            <span className="verifiedtext" style={{ fontWeight: 600 }}>
              Smart Safeguards
            </span>
            <span>With platform and people</span>
          </div>
        </section>
        <section className="d-flex w-100 mt-4 mt-lg-0 mx-lg-5">
          <img src="/amazing.png" alt="backverified" />
          <div className="d-flex flex-column mx-2">
            <span className="verifiedtext" style={{ fontWeight: 600 }}>
              Amazing Support
            </span>
            <span>Your own kynd concierge</span>
          </div>
        </section>
      </div>
    </div>
  );
}
export default NextSection;
