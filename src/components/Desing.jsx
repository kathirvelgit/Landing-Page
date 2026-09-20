import designImage from "../assets/desing.png";

function Design() {
  return (
    <section className="info-section design-section">
      <div className="info-container">
        <div className="info-image">
          <img src={designImage} alt="Design illustration" />
        </div>

        <div className="info-content">
          <h2>
            How to design your site footer like
            <br />
            we did
          </h2>

          <p>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>

          <button className="primary-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Design;
