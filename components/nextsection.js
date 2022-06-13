function NextSection() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="d-flex justify-content-between align-items-center w-75">
        <section className="d-flex">
          <img src="/verifiedimage.png" alt="backverified" />
          <div className="d-flex flex-column mx-2">
            <span className="verifiedtext">Verified Workers</span>
            <span>Build your dream team</span>
          </div>
        </section>
        <section className="d-flex">
          <img src="/smart.png" alt="backverified" />
          <div className="d-flex flex-column mx-2">
            <span className="verifiedtext">Smart Safeguards</span>
            <span>With platform and people</span>
          </div>
        </section>
        <section className="d-flex">
          <img src="/amazing.png" alt="backverified" />
          <div className="d-flex flex-column mx-2">
            <span className="verifiedtext">Amazing Support</span>
            <span>Your own kynd concierge</span>
          </div>
        </section>
      </div>
    </div>
  );
}
export default NextSection;
