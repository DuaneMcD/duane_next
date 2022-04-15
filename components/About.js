import Image from 'next/image';
import duane from '../components/images/duane_sunglasses.jpg';
const About = () => {
  return (
    <>
      <section id='about' className={'about'}>
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
        <div className='about-part2'>
          <div className={'container'}>
            <div className={'duane-sunglasses-container'}>
              <Image
                className={'duane-sunglasses'}
                src={duane}
                alt='Duane with sunglasses'
                priority
                placeholder='blur'
                layout='intrinsic'
                // objectFit='contain'
                // objectPosition='center bottom'
              />
              <style jsx global>{`
                .duane-sunglasses {
                  border-radius: 100px 2px 100px 2px;
                }
              `}</style>
            </div>
            <div className={'col-md-8 tileBox'}>
              <div className={'txtHead'}>
                <h2>{`Hello I'm Duane McDonald`}</h2>
                <h3>A Passionate Web Developer.</h3>
              </div>
              <p>
                {`I see the internet as an amazing place. A tool, utility, and a
                resource. It empowers us to connect more frequently and conduct
                ourselves more efficiently. And I want to take the web further.`}
              </p>
              <p>
                {`The web is powerful, but some users see it as a hurdle. Wether
                it's because they're not technically inclined, suffer from poor
                design or a solution that doesn't solve for them. I see
                opportunity to make our greatest innovations, greater.`}
              </p>
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
