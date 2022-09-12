import React from 'react';
import './project.css';
import IMG1 from '../../assets/freddy-flix.jpg';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/redditovrflow-logo.png';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/Ads.jpg';
import IMG7 from '../../assets/Food-Order-app.png';
import IMG8 from '../../assets/portnow.png';
import portal from '../../assets/portal.pdf';

const data = [
  {
    id: 2,
    image: IMG2,
    title: 'Lumen8 Ecommerce NextJS',
    github: 'https://github.com/freddy-lopez-dev/Lumen8',
    demo: 'https://lumen8-freddy-lopez-dev.vercel.app/#d',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Reddit inspired MVC App',
    github: 'https://github.com/freddy-lopez-dev/SD-330-W22SD-Assignment',
    demo: '',
  },
  {
    id: 1,
    image: IMG1,
    title: 'Netflix inspired React App',
    github: 'https://github.com/freddy-lopez-dev/freddyflix-react',
    demo: 'https://freddy-flix.netlify.app/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Land Rover Own Your Land',
    github: '',
    demo: 'https://xd.adobe.com/view/a3c1d9a1-dcc0-4d7c-bf88-49d46b9ea671-f692/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'GAC Shipping and Logistic Customer Portal',
    github: '',
    demo: portal,
  },
  {
    id: 6,
    image: IMG8,
    title: 'GAC Port Now',
    github: '',
    demo: 'https://xd.adobe.com/view/bf875b01-4e56-462e-90eb-31392608f1b9-ead4/?fullscreen',
  },
  {
    id: 7,
    image: IMG6,
    title: 'Dubai Outlet Village App',
    github: '',
    demo: 'https://xd.adobe.com/view/779ffc66-6634-479d-8466-7ca5eca2ae1e-22cc/?fullscreen',
  },
  {
    id: 8,
    image: IMG7,
    title: 'Food Ordering App NextJS',
    github: 'https://github.com/freddy-lopez-dev/next-supreme',
    demo: 'https://next-supreme.vercel.app/',
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
                {github === '' ? (
                  ''
                ) : (
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                  download
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
