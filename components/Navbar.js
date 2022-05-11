import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Navbar = () => {
  return (
    <>
      <nav className={'navbar'} role='navigation'>
        <button
          type='button'
          id='nav-toggle'
          className={'navbar-toggle'}
          data-toggle='collapse'
          data-target='#main-nav'>
          <span className={'sr-only'}>Toggle navigation</span>
        </button>
        <div className={'social'}>
          <a
            href='https://github.com/DuaneMcD'
            target='_blank'
            rel='noreferrer'>
            <FontAwesomeIcon
              size='2x'
              className={'fa' && 'fa-github'}
              icon={faGithub}
            />
          </a>
          <a
            href='https://www.linkedin.com/in/duane-mcd/'
            target='_blank'
            rel='noreferrer'>
            <FontAwesomeIcon
              size='2x'
              className={'fa' && 'fa-linkedin'}
              icon={faLinkedin}
            />
          </a>
        </div>
        <div id='mainnav-container' className={'collapse navbar-collapse'}>
          <ul className={'mainnav'} id='mainNav'>
            <li>
              <a data-nav='about' href='#about' className={'scroll-link'}>
                About
              </a>
            </li>
            <li>
              <a
                data-nav='education'
                href='#education'
                className={'scroll-link'}>
                Education
              </a>
            </li>
            <li>
              <a
                data-nav='experience'
                href='#experience'
                className={'scroll-link'}>
                Experience
              </a>
            </li>
            <li>
              <a
                data-nav='portfolio'
                href='#portfolio'
                className={'scroll-link'}>
                Portfolio
              </a>
            </li>
            <li>
              <a data-nav='contact' href='#contact' className={'scroll-link'}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
