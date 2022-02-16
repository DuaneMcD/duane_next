if (typeof window !== 'undefined') {
  const navbar = document.querySelector('.navbar');
  const home = document.querySelector('.home');
  const about = document.querySelector('.about');
  const education = document.querySelector('.education');
  const experience = document.querySelector('.experience');
  const portfolio = document.querySelector('.portfolio');
  const contact = document.querySelector('.contact');
  const links = [home, about, education, experience, portfolio, contact];

  const homeObserverOptions = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 0.2,
  };

  const homeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        navbar.style.backgroundColor = 'black';
      } else {
        navbar.style.backgroundColor = '#38383899';
      }
    });
  }, homeObserverOptions);

  const navLinkObserverOptions = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 0.2,
  };

  const navLinkObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navbar;
      }
    });
  }, navLinkObserverOptions);

  homeObserver.observe(home);

  navLinkObserver.observe(home, about);
}
