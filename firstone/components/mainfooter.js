function Mainfooter() {
  return (
    <section className="mainfooterbackground">
      <div className="container pb-5 mt-4 mt-lg-0 wholebottomborder">
        <div className="row">
          <div className="col mb-3 mb-lg-0 bottomborder ">
            <div className="fontsweight mb-3 mb-lg-0">How it works?</div>
            <ul className="liststyle mt-lg-4 footerlist mb-2 mb-lg-0">
              <li>NDIS Participants</li>
              <li>Support Workers</li>
              <li>Support Coordinators</li>
              <li>Invite Your Clients</li>
              <li>Invite Your Workers</li>
            </ul>
          </div>
          <div className="col-lg fullwidths bottomborder mb-3 mb-lg-0">
            <div className="fontsweight mb-3 mb-lg-0">More Info</div>
            {/* <ul className="liststyle mt-lg-4 footerlist mb-2 mb-lg-0">
              <li>Safety Culture</li>
              <li>Insurance Info</li>
              <li>Kynd Blog</li>
              <li>App & Website</li>
            </ul> */}
          </div>
          <div className="col-lg bottomborder mb-3 mb-lg-0">
            <div className="fontsweight mb-3 mb-lg-0">Contact Us</div>
            {/* <ul className="liststyle mt-lg-4 footerlist mb-2 mb-lg-0">
              <li>Help Centre</li>
              <li>Contact Us</li>
              <li>Press / Media</li>
              <li>Careers</li>
            </ul> */}
          </div>
          <div className="col-lg bottomborder">
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
            <div className="d-flex mt-5 justify-content-center justify-content-lg-start">
              <img src="./appstore.png" alt="appstore" />
              <img src="./googlepay.png" alt="googlepay" className="mx-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-between mt-3 flex-column flex-lg-row">
        <div className="d-none d-lg-block">
          © 2020 Kynd Pty Ltd. All Rights Reserved.
          <span>Terms of Use • Privacy Policy</span>
        </div>
        <div className="d-lg-none">
          <div>© 2021 Kynd Pty Ltd. "Be Kind"</div>
          <div className="mt-4">Terms of Use • Privacy Policy</div>
        </div>
        <div className="d-flex flex-column d-lg-block">
          <span className="mt-4 mt-lg-0 mx-lg-3">💛 For Your NDIS</span>
          <span className="mt-4 mt-lg-0 ">
            <img src="./facebook.png" alt="face" />
            <img src="./in.png" alt="face" className="mx-2" />
            <img src="./insta.png" alt="face" />
          </span>
        </div>
      </div>
    </section>
  );
}
export default Mainfooter;
