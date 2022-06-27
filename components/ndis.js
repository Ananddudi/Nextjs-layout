function Ndis() {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{
        marginTop: "6%",
        width: "100%",
        height: "640px",
        backgroundImage: `url(${"/ndisback.png"})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="h1 d-none d-lg-block" style={{ fontWeight: 600 }}>
        All types of NDIS services
      </div>
      <div className="h1 d-lg-none" style={{ fontWeight: 600 }}>
        What help can I find?
      </div>
      <div className="my-3" style={{ fontWeight: 400, fontSize: "17px" }}>
        Get support for your needs and NDIS goals. You know, things like...
      </div>
      <div className="d-flex flex-column my-lg-3 justify-content-center w-100 align-items-center">
        <div className="d-flex w-lg-75 w-100 justify-content-between  align-items-start align-items-lg-center flex-column flex-lg-row">
          <div className="d-flex flex-lg-column align-items-center mx-lg-5 my-2 ">
            <img src="./PersonalCare.png" alt="care" className="iconwidth" />
            <span style={{ fontWeight: 600 }}>Personal Care</span>
          </div>
          <div className="d-flex flex-lg-column align-items-center mx-lg-5 my-2 my-lg-0">
            <img src="./HelpAtHome.png" alt="care2" className="iconwidth" />
            <span style={{ fontWeight: 600 }}>Help in the Home</span>
          </div>
          <div className="d-flex flex-lg-column align-items-center mx-lg-5 my-2 my-lg-0">
            <img
              src="./SocialAssistance.png"
              alt="care3"
              className="iconwidth"
            />
            <span style={{ fontWeight: 600 }}>Social Assistance</span>
          </div>
          <div className="d-flex flex-lg-column align-items-center mx-lg-5 my-2 my-lg-0">
            <img
              src="./ExcerciseFitness.png"
              alt="care"
              className="iconwidth"
            />
            <span style={{ fontWeight: 600 }}>Exercise & Fitness</span>
          </div>
        </div>

        <div className="d-flex w-lg-75 w-100 justify-content-between align-items-start align-items-lg-center my-lg-3 flex-column flex-lg-row mb-5 mb-lg-0">
          <div className="d-flex flex-lg-column align-items-center mx-lg-5 my-2 my-lg-0">
            <img src="./MealPreperation.png" alt="care" className="iconwidth" />
            <span style={{ fontWeight: 600 }}>MealPreperation</span>
          </div>
          <div className="d-flex flex-lg-column align-items-center mx-lg-5 my-2 my-lg-0">
            <img
              src="./TherapyAssistant.png"
              alt="care"
              className="iconwidth"
            />
            <span style={{ fontWeight: 600 }}>Therapy Assistance</span>
          </div>
          <div className="d-flex flex-lg-column align-items-center mx-lg-5 my-2 my-lg-0">
            <img
              src="./MentorLifeskills.png"
              alt="care"
              className="iconwidth"
            />
            <span style={{ fontWeight: 600 }}>Mentor & Life Skills</span>
          </div>
          <div className="d-flex flex-lg-column align-items-center mx-lg-5 my-2 my-lg-0">
            <img src="./TravelTransport.png" alt="care" className="iconwidth" />
            <span style={{ fontWeight: 600 }}>Travel & Transport</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Ndis;
