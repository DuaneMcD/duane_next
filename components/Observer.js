if (typeof window !== 'undefined') {
  const navBar = document.querySelector('.navbar');
  const home = document.querySelector('.home');

  const options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        navBar.style.backgroundColor = 'black';
      } else {
        navBar.style.backgroundColor = '#38383899';
      }
    });
  }, options);

  observer.observe(home);
}
