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
    // rootMargin: '-5% 0px -35% 0px',
    rootMargin: ' 0px',
    threshold: 0.45,
  };

  const navLinkObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (entry.target.id === link.dataset.nav) {
          link.classList.add('active');
        }
      });
    });
  }, navLinkObserverOptions);

  homeObserver.observe(home);

  // trigger navbar active section highlighting

  // sections.forEach(section => {
  //   navLinkObserver.observe(section);
  // });
}

//   const sections = document.querySelectorAll('section');
//   const navLi = document.querySelectorAll('nav .mainnav-container ul li');

//   window.addEventListener('scroll', () => {
//     let current = '';
//     sections.forEach(section => {
//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.clientHeight;
//       if (scrollY >= sectionTop + 10) {
//         current = section.getAttribute('id');
//         console.log(current);
//       }
//     });
//   });

//   navLi.forEach(li => {
//     li.classList.remove('active');
//     if (li.dataset.nav.contains(current)) {
//       console.log(current);
//       li.classList.add('active');
//     }
//   });
// }
