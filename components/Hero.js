const Hero = () => {
  return (
    <section id='hero' className={'hero'}>
      <article className={'introText'}>
        <div className={'container'}>
          <div className={'heroText'}>
            <h1>DUANE McDONALD</h1>
            <h2>Full Stack Developer</h2>
            <span className={'caption'}>
              Web Apps, Computer Programming and Lean Solutions
            </span>
          </div>
          <p className={'blurb'}>
            {`I'm a software developer & coding nerd. My interests include E-commerce, bespoke business apps &
                solutions, JAM Stack applications, and Food-Tech. My mission is to make bespoke
                technology and solutions more accessible for all.`}
          </p>
        </div>
      </article>
    </section>
  );
};

export default Hero;
