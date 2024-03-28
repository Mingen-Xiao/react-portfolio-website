import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/my-portfolio-1.jpg";
import IMG2 from "../../assets/my-portfolio-2.jpg";
import IMG3 from "../../assets/my-portfolio-3.jpg";
import IMG4 from "../../assets/my-portfolio-4.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Personal Portfolio Website',
    github: 'https://github.com/Mingen-Xiao/react-portfolio-website',
    demo: 'https://mingen-xiao.github.io/react-portfolio-website/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'SortLog Online Inventory Management Software',
    github: 'https://github.com/SortLog',
    demo: 'https://sortlog.github.io/SortLog-FrontEnd/dashboard'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Data Lineage System',
    github: 'https://github.com/Mingen-Xiao/Data-Lineage',
    demo: ' https://mingen-xiao.github.io/Data-Lineage/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'CI/CD Pipelines System',
    github: 'https://github.cs.adelaide.edu.au/a1788871/CONT9',
    demo: 'https://github.cs.adelaide.edu.au/a1788871/CONT9'
  }
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

