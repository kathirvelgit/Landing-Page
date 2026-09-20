import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

function Marketing() {
  const articles = [
    {
      image: blog1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      image: blog2,
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      image: blog3,
      title: "Revamping the Membership Model with Triathlon Australia",
    },
  ];

  return (
    <section className="marketing" id="blog">
      <div className="section-container">
        <h2>Caring is the new marketing</h2>

        <p className="marketing-description">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.
        </p>

        <div className="article-grid">
          {articles.map((article, index) => (
            <div className="article-card" key={index}>
              <div className="article-image">
                <img src={article.image} alt={article.title} />
              </div>

              <div className="article-content">
                <h3>{article.title}</h3>

                <a href="#read">Readmore →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Marketing;
