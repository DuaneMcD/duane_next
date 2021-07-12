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
          {/* <span className={'icon-bar'}></span>
          <span className={'icon-bar'}></span>
          <span className={'icon-bar'}></span> */}
        </button>
        <div className={'social'}>
          <a
            href='https://github.com/DuaneMcD'
            target='_blank'
            rel='noreferrer'>
            <FontAwesomeIcon
              size='2x'
              className={'fa' && 'fa-github' && 'nav-social-ico'}
              icon={faGithub}
            />
          </a>
          <a
            href='https://www.linkedin.com/in/duane-mcd/'
            target='_blank'
            rel='noreferrer'>
            <FontAwesomeIcon
              size='2x'
              className={'fa' && 'fa-linkedin' && 'nav-social-ico'}
              icon={faLinkedin}
            />
          </a>
        </div>
        <div id='mainnav-container' className={'collapse navbar-collapse'}>
          <ul className={'mainnav'} id='mainNav'>
            <li className={'active'}>
              <a href='#home' className={'scroll-link'}>
                Home
              </a>
            </li>
            <li>
              <a href='#about' className={'scroll-link'}>
                About
              </a>
            </li>
            <li>
              <a href='#education' className={'scroll-link'}>
                Education
              </a>
            </li>
            <li>
              <a href='#experience' className={'scroll-link'}>
                Experience
              </a>
            </li>
            <li>
              <a href='#portfolio' className={'scroll-link'}>
                Portfolio
              </a>
            </li>
            <li>
              <a href='#contact' className={'scroll-link'}>
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
