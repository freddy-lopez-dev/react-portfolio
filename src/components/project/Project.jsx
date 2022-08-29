import React from 'react';
import './project.css';
import IMG1 from '../../assets/freddy-flix.jpg';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/Ads.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Netflix inspired React App',
    github: 'https://github.com/freddy-lopez-dev/freddyflix-react',
    demo: 'https://freddy-flix.netlify.app/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Lumen8 Ecommerce NextJS',
    github: 'https://github.com/freddy-lopez-dev/freddyflix-react',
    demo: 'https://freddy-flix.netlify.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Reddit inspired MVC App',
    github: 'https://github.com/freddy-lopez-dev/freddyflix-react',
    demo: 'https://freddy-flix.netlify.app/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Land Rover Own Your Land',
    github: 'https://github.com/freddy-lopez-dev/freddyflix-react',
    demo: 'https://freddy-flix.netlify.app/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'GAC Shipping and Logistic Customer Portal',
    github: 'https://github.com/freddy-lopez-dev/freddyflix-react',
    demo: 'https://freddy-flix.netlify.app/',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Dubai Outlet Village App',
    github: 'https://github.com/freddy-lopez-dev/freddyflix-react',
    demo: 'https://freddy-flix.netlify.app/',
  },
];

const Project = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
