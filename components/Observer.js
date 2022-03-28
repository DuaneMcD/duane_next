if (typeof window !== 'undefined') {
  const navbar = document.querySelector('.navbar');
  const home = document.querySelector('.home');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.mainnav li a');

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
    rootMargin: '25px',
    threshold: 0.5,
  };

  const navLinkObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      navLinks.forEach(link => {
        if (entry.target.id === link.dataset.nav) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    });
  }, navLinkObserverOptions);

  homeObserver.observe(home);

  sections.forEach(section => {
    navLinkObserver.observe(section);
  });
}
