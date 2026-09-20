import Icon6 from "../assets/Icon6.png";
import Icon7 from "../assets/Icon7.png";
import Icon8 from "../assets/Icon8.png";
import Icon9 from "../assets/Icon9.png";

function Statistics() {
  const stats = [
    {
      number: "2,245,341",
      label: "Members",
      icon: Icon6
    },
    {
      number: "46,328",
      label: "Clubs",
      icon: Icon7
    },
    {
      number: "828,867",
      label: "Event Bookings",
      icon: Icon8
    },
    {
      number: "1,926,436",
      label: "Payments",
      icon: Icon9
    }
  ];

  return (
    <section className="statistics">

      <div className="statistics-container">

        <div className="statistics-title">

          <h2>
            Helping a local
            <br />
            <span>business reinvent itself</span>
          </h2>

          <p>
            We reached here with our hard work and dedication.
          </p>

        </div>

        <div className="statistics-grid">

          {stats.map((stat, index) => (

            <div className="stat" key={index}>
              <img src={stat.icon} alt={stat.label} />
     
              <div>
                <strong>
                  {stat.number}
                </strong>

                <p>
                  {stat.label}
                </p>
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Statistics;