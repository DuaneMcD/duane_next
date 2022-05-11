import Image from 'next/image';
import duane from '../components/images/duane_sunglasses.jpg';
const About = () => {
  return (
    <section id='about' className={'about'}>
      <div className={'container'}>
        <div className={'duane-sunglasses-container'}>
          <Image
            className={'duane-sunglasses'}
            src={duane}
            alt='Duane with sunglasses'
            priority
            placeholder='blur'
            layout='intrinsic'
          />
        </div>
        <div className={'about-header'}>
          <h2 className={'about-hello'}>
            {`Hello, 
            I'm Duane McDonald`}
          </h2>
          <h3>A Passionate Web Developer.</h3>
          <p className={'about-blurb'}>
            {`I think the Internet is an incredible place. A tool, utility, and a resource. This empowers us to connect more often and conduct ourselves in a more efficient manner. And I want to take the web further.
              
              Technology is powerful, but for some users, this is rather an obstacle. Maybe this is because they are not technically inclined, their tools suffer from poor design or simply a solution that does not solve for them. I see an opportunity for our biggest innovations.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
