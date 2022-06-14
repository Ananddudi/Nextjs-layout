function Mainfooter() {
  return (
    <section
      style={{
        width: "1400px",
        height: "400px",
        backgroundImage: `url(${"/mainfooter.png"})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "#FFFEFC",
      }}
    >
      <div className="container border-bottom pb-5">
        <div className="row">
          <div className="col">
            <div className="fontsweight">How it works?</div>
            <ul className="liststyle mt-4">
              <li>NDIS Participants</li>
              <li>Support Workers</li>
              <li>Support Coordinators</li>
              <li>Invite Your Clients</li>
              <li>Invite Your Workers</li>
            </ul>
          </div>
          <div className="col">
            <div className="fontsweight">More Info</div>
            <ul className="liststyle mt-4">
              <li>Safety Culture</li>
              <li>Insurance Info</li>
              <li>Kynd Blog</li>
              <li>App & Website</li>
            </ul>
          </div>
          <div className="col">
            <div className="fontsweight">Contact Us</div>
            <ul className="liststyle mt-4">
              <li>Help Centre</li>
              <li>Contact Us</li>
              <li>Press / Media</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="col">
            <div className="fontsweight">Give us a call today</div>
            <div className="d-flex mt-4">
              <img src="./phone.png" alt="phone" />
              <span className="mx-4" style={{ fontWeight: 200 }}>
                07 5559 6532
              </span>
            </div>
            <div className="mt-4">Download the Kynd App</div>
            <div className="mt-3" style={{ fontWeight: 200 }}>
              Some space to write some feel good final message?
            </div>
            <div className="d-flex mt-5">
              <img src="./appstore.png" alt="appstore" />
              <img src="./googlepay.png" alt="googlepay" className="mx-2" />
            </div>
          </div>
        </div>
      </div>
            <div className="container d-flex justify-content-between mt-3">
        <div>
          © 2020 Kynd Pty Ltd. All Rights Reserved.
          <span>Terms of Use • Privacy Policy</span>
        </div>
        <div>
          💛 For Your NDIS{" "}
          <span>
            <img src="./facebook.png" alt="face" />
            <img src="./in.png" alt="face" />
            <img src="./insta.png" alt="face" />
          </span>
        </div>
      </div>
    </section>
  );
}
export default Mainfooter;
