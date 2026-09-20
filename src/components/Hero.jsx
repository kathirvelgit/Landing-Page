import heroImage from "../assets/hero.png";
import Dot from "../assets/Dot.png";
function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        <div className="hero-content">

          <h1>
            Lessons and insights
            <br />

            <span>from 8 years</span>
          </h1>

          <p>
            Where to grow your business as a photographer:
            site or social media?
          </p>

          <button className="primary-btn">
            Register
          </button>

        </div>

        <div className="hero-image">
          <img
            src={heroImage}
            alt="Hero illustration"
          />
        </div>

        <img className="hero-dots" src={Dot} alt="" aria-hidden="true" />

      </div>

    </section>
  );
}

export default Hero;