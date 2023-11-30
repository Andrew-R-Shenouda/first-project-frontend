import "./homepage.css";

function Homepage() {
  return (
    <>
      <div className="welcome-banner">
        <div className="ml-5 pt-5 p-1 welcome-banner-text"> Knowledge</div>
        <div className="ml-5 pt-3 welcome-banner-text">is Power</div>
        <div className="ml-5 pt-4 welcome-banner-subtext">
          And so is Crypto. Learn everything you need to know about the market right here.
        </div>
      </div>
      <div className="btn-container">
        <button className="btn get-started-button">Get Started</button>
      </div>
    </>
  );
}
export default Homepage;
