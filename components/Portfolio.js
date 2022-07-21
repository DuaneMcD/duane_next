import { useState } from 'react';
import { motion } from 'framer-motion';

import Chirpr from './images/portfolio/chirpr.png';
import Swapi from './images/portfolio/swapi.png';
import Calculator from './images/portfolio/calculator.png';
import ReactExpense from './images/portfolio/react-expense.png';
import JsExpense from './images/portfolio/expense-tracker.png';
import SnakeGame from './images/portfolio/snake-game.png';
import Todo from './images/portfolio/todo-app.png';
import RPSGame from './images/portfolio/rps-game.png';
import ShaunShines from './images/portfolio/shaun-shines-next.png';
import Dashboard from './images/portfolio/python-dashboard.png';
import Storefront from './images/portfolio/storefront-WIP.png';
import Project from './Project';
import Filter from './Filter';

const Portfolio = () => {
  const [galleryFilter, setGalleryFilter] = useState('all');
  const [displayedProjects, setDisplayedProjects] = useState([]);

  const projects = [
    {
      id: 1,
      title: `Twitter Clone`,
      hoverTitle: `Chirpr`,
      description: `A react based Twitter app featuring the Twitter API
      2.0 and puppeteer web scraping.`,
      image: Chirpr,
      projectLink: `https://chirpr-demo.herokuapp.com/`,
      tags: ['all', 'react'],
    },
    {
      id: 2,
      title: `Business Website`,
      hoverTitle: `Shaun Shines`,
      description: `This is a client site built for an car detailing
      business. Built with Next.js & React. Features
      nodemailer, Chatra (live chat) and custom react form
      hook.`,
      image: ShaunShines,
      projectLink: `https://shaunshines-next.vercel.app/`,
      tags: ['all', 'next.js'],
    },
    {
      id: 3,
      title: `Star Wars`,
      hoverTitle: `Star Wars API`,
      description: `A Star Wars data fetching app. Featuring bootstrap,
      this app cleans, displays and sorts star wars
      character data.`,
      image: Swapi,
      projectLink: `https://swapi-v.herokuapp.com/`,
      tags: ['all', 'react'],
    },
    // {
    //   id: 4,
    //   title: `Javascript Calculator`,
    //   hoverTitle: `Calculator`,
    //   description: `A four function calculator. Complete with history
    //   and a memory function.`,
    //   image: Calculator,
    //   projectLink: `https://duanemcd.github.io/calculator/`,
    //   tags: ['all', 'javascript'],
    // },
    {
      id: 5,
      title: `React Expense Tracker`,
      hoverTitle: `React.JS Expense Tracker`,
      description: `An expense tracker with graph.js visuals using bootstrap.`,
      image: ReactExpense,
      projectLink: `https://expense-tracker-react-dm.herokuapp.com/`,
      tags: ['all', 'react'],
    },
    {
      id: 6,
      title: `Snake Game`,
      hoverTitle: `Snake`,
      description: `A vanilla javascript/HTML snake game for desktop
      browsers. Uses html canvas. Uses local storage for
      high score persistence.`,
      image: SnakeGame,
      projectLink: `https://duanemcd.github.io/snake/`,
      tags: ['all', 'javascript'],
    },
    // {
    //   id: 7,
    //   title: `To-do App`,
    //   hoverTitle: `To-Do App`,
    //   description: ` A Javascript To-Do App featuring local storage.`,
    //   image: Todo,
    //   projectLink: `https://duanemcd.github.io/Todo-App/`,
    //   tags: ['all', 'javascript'],
    // },
    // {
    //   id: 8,
    //   title: `Javascript Expense Tracker`,
    //   hoverTitle: `JS Expense Tracker`,
    //   description: `A JavaScript Expense tracker with local storage and
    //   responsive design.`,
    //   image: JsExpense,
    //   projectLink: `https://duanemcd.github.io/expense-tracker/`,
    //   tags: ['all', 'javascript'],
    // },
    // {
    //   id: 9,
    //   title: `Rock Paper Scissors!`,
    //   hoverTitle: `Rock Paper Scissors Game`,
    //   description: `A playful take on the classic rock paper scissors
    //   game. Javascript, CSS and HTML.`,
    //   image: RPSGame,
    //   projectLink: `https://duanemcd.github.io/rps_game/`,
    //   tags: ['all', 'javascript'],
    // },
    {
      id: 10,
      title: `Storefront E-commerce`,
      hoverTitle: `A fully hosted Web Store`,
      description: `Built on Next.js and directus (CMS), this project enables a scalable online presence. Directus uses SQL to store objects and data.`,
      image: Storefront,
      projectLink: `https://github.com/DuaneMcD/storefront`,
      tags: ['all', 'next.js', 'sql'],
    },
    {
      id: 11,
      title: `Population Dashboard`,
      hoverTitle: `Python Hvplot Dashboard`,
      description: ` `,
      image: Dashboard,
      projectLink: `https://population-hvplot-dashboard.herokuapp.com/dashboard`,
      tags: ['all', 'python'],
    },
  ];
  return (
    <section id='portfolio' className={'portfolio'}>
      <div className={'container'}>
        <h2>Project Portfolio</h2>
        <p className={'portfolio-blurb'}>
          Here is a collection of past and current projects I have built. Hover
          for a description and click for a demo. Enjoy!
        </p>
        <p className={'portfolio-blurb'}>
          Checkout
          <a
            href='https://www.github.com/duanemcd'
            target='_blank'
            rel='noreferrer'>
            {' my github '}
          </a>
          for full repositories and code details.
        </p>
        <Filter
          projects={projects}
          setDisplayedProjects={setDisplayedProjects}
          galleryFilter={galleryFilter}
          setGalleryFilter={setGalleryFilter}
        />
        <div className='portfolio-gallery'>
          {displayedProjects.map(project => (
            <Project key={project.id} {...project} />
          ))}
        </div>

        <style jsx>{`
          .portfolio-gallery {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Portfolio;
