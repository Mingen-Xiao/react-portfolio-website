import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com/Mingen-Xiao/react-portfolio-website',
    demo: 'https://dribbble.com/shots/23888631-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Aurora Bundle',
    github: 'https://dribbble.com/shots/23802853-Aurora-Bundle',
    demo: 'https://dribbble.com/shots/23888631-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Data visualization and charts templates for Figma',
    github: 'https://dribbble.com/shots/23802828-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma',
    demo: 'https://dribbble.com/shots/23888631-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Professional-looking visualizations for any project',
    github: 'https://dribbble.com/shots/23802795-Professional-looking-visualizations-for-any-project',
    demo: 'https://dribbble.com/shots/23888631-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Aurora Bundle set (ORION + ECLIPSE + HYPER)',
    github: 'https://dribbble.com/shots/23802781-Aurora-Bundle-set-ORION-ECLIPSE-HYPER',
    demo: 'https://dribbble.com/shots/23888631-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Make Impactful Data Visualizations in Figma with Hyper Charts UI',
    github: 'https://dribbble.com/shots/23667852-Make-Impactful-Data-Visualizations-in-Figma-with-Hyper-Charts-UI',
    demo: 'https://dribbble.com/shots/23888631-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },

];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;

