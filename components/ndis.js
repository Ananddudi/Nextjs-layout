function Ndis() {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{
        marginTop: "6%",
        width: "1400px",
        height: "640px",
        backgroundImage: `url(${"/ndisback.png"})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="h1" style={{ fontWeight: 600 }}>
        All types of NDIS services
      </div>
      <div className="my-3" style={{ fontWeight: 400, fontSize: "17px" }}>
        Get support for your needs and NDIS goals. You know, things like...
      </div>
      <div className="d-flex flex-column my-3 justify-content-center w-100 align-items-center">
        <div className="d-flex w-75 justify-content-between align-items-center">
          <div className="d-flex flex-column align-items-center mx-5 my-5">
            <img src="./PersonalCare.png" alt="care" className="w-75" />
            <span style={{ fontWeight: 600 }}>Personal Care</span>
          </div>
          <div className="d-flex flex-column align-items-center mx-5">
            <img src="./HelpAtHome.png" alt="care" style={{ width: "57.6%" }} />
            <span style={{ fontWeight: 600 }}>Help in the Home</span>
          </div>
          <div className="d-flex flex-column align-items-center mx-5">
            <img
              src="./SocialAssistance.png"
              alt="care"
              style={{ width: "57%" }}
            />
            <span style={{ fontWeight: 600 }}>Social Assistance</span>
          </div>
          <div className="d-flex flex-column align-items-center mx-5">
            <img
              src="./ExcerciseFitness.png"
              alt="care"
              style={{ width: "57%" }}
            />
            <span style={{ fontWeight: 600 }}>Exercise & Fitness</span>
          </div>
        </div>

        <div className="d-flex w-75 justify-content-between align-items-center my-3">
          <div className="d-flex flex-column align-items-center mx-5">
            <img src="./MealPreperation.png" alt="care" className="w-75" />
            <span style={{ fontWeight: 600 }}>MealPreperation</span>
          </div>
          <div className="d-flex flex-column align-items-center mx-5">
            <img
              src="./TherapyAssistant.png"
              alt="care"
              style={{ width: "57.6%" }}
            />
            <span style={{ fontWeight: 600 }}>Therapy Assistance</span>
          </div>
          <div className="d-flex flex-column align-items-center mx-5">
            <img
              src="./MentorLifeskills.png"
              alt="care"
              style={{ width: "57%" }}
            />
            <span style={{ fontWeight: 600 }}>Mentor & Life Skills</span>
          </div>
          <div className="d-flex flex-column align-items-center mx-5">
            <img
              src="./TravelTransport.png"
              alt="care"
              style={{ width: "57%" }}
            />
            <span style={{ fontWeight: 600 }}>Travel & Transport</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Ndis;
