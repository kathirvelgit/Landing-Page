import nextcentLogo from "../assets/Icon1.png";
import Social1 from "../assets/Social1.png";
import Social2 from "../assets/Social2.png";
import Social3 from "../assets/Social3.png";
import Social4 from "../assets/Social4.png";
import send from "../assets/send.png";
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-company">

          <div className="footer-logo">
            <img src={nextcentLogo} alt="Nextcent logo" />
            Nextcent
          </div>

          <p>
            Copyright © 2020 Landify UI Kit.
          </p>

          <p>
            All rights reserved
          </p>

          <div className="social-icons">
            <img src={Social1} alt="Social media" />
            <img src={Social2} alt="Social media" />
            <img src={Social3} alt="Social media" />
            <img src={Social4} alt="Social media" />
          </div>

        </div>

        <div className="footer-column">

          <h3>
            Company
          </h3>

          <a href="#about">About us</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact us</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Testimonials</a>

        </div>

        <div className="footer-column">

          <h3>
            Support
          </h3>

          <a href="#help">Help center</a>
          <a href="#terms">Terms of service</a>
          <a href="#legal">Legal</a>
          <a href="#privacy">Privacy policy</a>
          <a href="#status">Status</a>

        </div>

        <div className="footer-column">

          <h3>
            Stay up to date
          </h3>

          <div className="subscribe">

            <input
              type="email"
              placeholder="Your email address"
            />

            <button>
              <img src={send} alt="Send" />
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;