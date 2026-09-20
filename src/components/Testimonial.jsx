import testimonialImage from "../assets/testimonial.png";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";

function Testimonial() {
  return (
    <section className="testimonial">

      <div className="testimonial-container">

       <div className="tesla-card">
  <img
    src={testimonialImage}
    alt="Testimonial"
  />
</div>

        <div className="testimonial-content">

          <p className="testimonial-text">

            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.


          </p>

          <h3>
            Tim Smith
          </h3>

          <p className="company-text">
            British Dragon Boat Racing Association
          </p>

          <div className="testimonial-bottom">

            <div className="mini-logos">
              <img src={client1} alt="Client 1" />

              <img src={client2} alt="Client 2" />

              <img src={client3} alt="Client 3" />
              <img src={client4} alt="Client 4" />
              <img src={client5} alt="Client 5" />
              <img src={client6} alt="Client 6" />
              
             
            </div>

            <a href="#customers">
              Meet all customers →
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonial;