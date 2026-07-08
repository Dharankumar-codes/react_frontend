import banner from "../assets/banner.png"
const HeroBanner = () => {
  return (
    <><div className="hero-banner">
      <img src={banner} alt="hero" />

      <div className="hero-content">
        <h1>Welcome To My Website</h1>
        <button>Explore Now</button>
      </div>
    </div></>
  );
};

export default HeroBanner;