import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import client7 from "../assets/client7.png";

function Clients() {
  const clients = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
  ];

  return (
    <section className="clients">
      <div className="section-container">
        <h2>Our Clients</h2>

        <p>We have been working with some Fortune 500+ clients</p>

        <div className="client-logos">
          {clients.map((client, index) => (
            <div className="client-logo" key={index}>
              <img src={client} alt={`Client ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
