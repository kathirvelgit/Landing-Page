import Icon3 from "../assets/Icon3.png";
import Icon4 from "../assets/Icon4.png";
import Icon5 from "../assets/Icon5.png";


function Community() {

  const communities = [
    {
      icon: Icon3,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments."
    },
    {
      icon: Icon4,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments."
    },
    {
      icon: Icon5,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments."
    }
  ];

  return (
    <section className="community" id="community">

      <div className="section-container">

        <h2>
          Manage your entire community
          <br />
          in a single system
        </h2>

        <p className="section-subtitle">
          Who is Nextcent suitable for?
        </p>

        <div className="community-grid">

          {communities.map((community, index) => (

            <div className="community-card" key={index}>

              <div className="community-icon">
                <img src={community.icon} alt={community.title} />
              </div>

              <h3>
                {community.title}
              </h3>

              <p>
                {community.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Community;