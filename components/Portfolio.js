import Image from 'next/image';
import Chirpr from './images/portfolio/chirpr.png';
import Swapi from './images/portfolio/swapi.png';
import Calculator from './images/portfolio/calculator.png';
import ReactExpense from './images/portfolio/react-expense.png';
import JsExpense from './images/portfolio/expense-tracker.png';
import SnakeGame from './images/portfolio/snake-game.png';
import Todo from './images/portfolio/todo-app.png';
import RPSGame from './images/portfolio/rps-game.png';
import ShaunShines from './images/portfolio/shaun-shines-next.png';

const Portfolio = () => {
  return (
    <section
      id='portfolio'
      className={'page-section section appear clearfix secPad'}>
      <div className={'container'}>
        <div className={'heading'}>
          <h2>Project Portfolio</h2>
          <p className={'portfolio-blurb'}>
            Here is a collection of past and current projects I have built.
            Hover for a description and click for a demo. Enjoy!
          </p>
          <p className={'portfolio-blurb'}>
            Checkout
            <a
              href='https://www.github.com/duanemcd'
              target='_blank'
              rel='noreferrer'>
              my github
            </a>
            for full repositories and code details.
          </p>
        </div>
        <div className={'row'}>
          <nav id='filter' className={'col-md-12'}>
            <ul>
              <li>
                <a
                  href='#'
                  className={'current btn-theme btn-small'}
                  data-filter='*'>
                  All
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className={'btn-theme btn-small'}
                  data-filter='.common-js'>
                  Common Javascript
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className={'btn-theme btn-small'}
                  data-filter='.react'>
                  React
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className={'btn-theme btn-small'}
                  data-filter='.next-js'>
                  Next.js
                </a>
              </li>
            </ul>
          </nav>
          <div className={'col-md-12'}>
            <div className={'row'}>
              <div className={'portfolio-items isotopeWrapper'} id='3'>
                <article className={'col-sm-4 isotopeItem react'}>
                  <div className={'portfolio-item'}>
                    <p className={'portfolio-title'}>Twitter Clone</p>
                    <Image src={Chirpr} alt='' />
                    <div className={'portfolio-desc align-center'}>
                      <div className={'folio-info'}>
                        <a
                          href='https://chirpr-demo.herokuapp.com/'
                          target='_blank'
                          rel='noreferrer'
                          className={'fancybox'}>
                          <h5>Chirpr</h5>
                          <h6>
                            A react based Twitter app featuring the Twitter API
                            2.0 and puppeteer web scraping.
                          </h6>
                          <i className={'fa fa-external-link fa-2x'}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
                <article className={'col-sm-4 isotopeItem next-js'}>
                  <div className={'portfolio-item'}>
                    <p className={'portfolio-title'}>Business Website</p>
                    <Image src={ShaunShines} alt='' />
                    <div className={'portfolio-desc align-center'}>
                      <div className={'folio-info'}>
                        <a
                          href='https://shaunshines.herokuapp.com/'
                          target='_blank'
                          rel='noreferrer'
                          className={'fancybox'}>
                          <h5>Shaunshines.com</h5>
                          <h6>
                            This is a client site built for an car detailing
                            business. Built with Next.js & React. Features
                            nodemailer, Chatra (live chat) and custom react form
                            hook.
                          </h6>
                          <i className={'fa fa-external-link fa-2x'}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
                <article className={'col-sm-4 isotopeItem react'}>
                  <div className={'portfolio-item'}>
                    <p className={'portfolio-title'}>Star Wars</p>
                    <Image src={Swapi} alt='' />
                    <div className={'portfolio-desc align-center'}>
                      <div className={'folio-info'}>
                        <a
                          href='https://swapi-v.herokuapp.com/'
                          target='_blank'
                          rel='noreferrer'
                          className={'fancybox'}>
                          <h5>Star Wars API</h5>
                          <h6>
                            A Star Wars data fetching app. Featuring bootstrap,
                            this app cleans, displays and sorts star wars
                            character data.
                          </h6>
                          <i className={'fa fa-external-link fa-2x'}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
                <article className={'col-sm-4 isotopeItem common-js'}>
                  <div className={'portfolio-item'}>
                    <p className={'portfolio-title'}>JavaScript Calculator</p>
                    <Image src={Calculator} alt='' />
                    <div className={'portfolio-desc align-center'}>
                      <div className={'folio-info'}>
                        <a
                          href='https://duanemcd.github.io/calculator/'
                          target='_blank'
                          rel='noreferrer'
                          className={'fancybox'}>
                          <h5>Calculator</h5>
                          <h6>
                            A four function calculator. Complete with history
                            and a memory function.
                          </h6>
                          <i className={'fa fa-external-link fa-2x'}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
                <article className={'col-sm-4 isotopeItem react'}>
                  <div className={'portfolio-item'}>
                    <p className={'portfolio-title'}>React Expense Tracker</p>
                    <Image src={ReactExpense} alt='' />
                    <div className={'portfolio-desc align-center'}>
                      <div className={'folio-info'}>
                        <a
                          href='https://expense-tracker-react-dm.herokuapp.com/'
                          target='_blank'
                          rel='noreferrer'
                          className={'fancybox'}>
                          <h5>React.js Expense Tracker</h5>
                          <h6>
                            A React Expense Tracker with chart.js and bootstrap
                            5.
                          </h6>
                          <i className={'fa fa-external-link fa-2x'}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
                <article className={'col-sm-4 isotopeItem common-js'}>
                  <div className={'portfolio-item'}>
                    <p className={'portfolio-title'}>Snake Game</p>
                    <Image src={SnakeGame} alt='' />
                    <div className={'portfolio-desc align-center'}>
                      <div className={'folio-info'}>
                        <a
                          href='images/portfolio/snake-game.png'
                          target='_blank'
                          rel='noreferrer'
                          className={'fancybox'}>
                          <h5>Snake Game</h5>
                          <h6>
                            A vanilla javascript snake game for desktop
                            browsers. Uses html canvas. Uses local storage for
                            high score persistence.
                          </h6>
                          <i className={'fa fa-external-link fa-2x'}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
                <article className={'col-sm-4 isotopeItem common-js'}>
                  <div className={'portfolio-item'}>
                    <p className={'portfolio-title'}>To-Do App</p>
                    <Image src={Todo} alt='' />
                    <div className={'portfolio-desc align-center'}>
                      <div className={'folio-info'}>
                        <a
                          href='images/portfolio/todo-app.png'
                          target='_blank'
                          rel='noreferrer'
                          className={'fancybox'}>
                          <h5>To-do App</h5>
                          <h6>
                            A Javascript To-Do App featuring local storage.
                          </h6>
                          <i className={'fa fa-external-link fa-2x'}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
                <article className={'col-sm-4 isotopeItem common-js'}>
                  <div className={'portfolio-item'}>
                    <p className={'portfolio-title'}>Expense Tracker</p>
                    <Image src={JsExpense} alt='' />
                    <div className={'portfolio-desc align-center'}>
                      <div className={'folio-info'}>
                        <a
                          href='images/portfolio/expense-tracker.png'
                          target='_blank'
                          rel='noreferrer'
                          className={'fancybox'}>
                          <h5>Expense Tracker</h5>
                          <h6>
                            A JavaScript Expense tracker with localstorage and
                            responsive design.
                          </h6>
                          <i className={'fa fa-external-link fa-2x'}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
                <article className={'col-sm-4 isotopeItem common-js'}>
                  <div className={'portfolio-item'}>
                    <p className={'portfolio-title'}>Rock Paper Scissors</p>
                    <Image src={RPSGame} alt='' />
                    <div className={'portfolio-desc align-center'}>
                      <div className={'folio-info'}>
                        <a
                          href='images/portfolio/rps-game.png'
                          target='_blank'
                          rel='noreferrer'
                          className={'fancybox'}>
                          <h5>Sword Hammer Shield!</h5>
                          <h6>
                            A playful take on the classic rock paper scissors
                            game. Vanilla javascript, CSS and HTML
                          </h6>
                          <i className={'fa fa-external-link fa-2x'}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
