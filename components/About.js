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
            {`I see the internet as an amazing place. A tool, utility, and a resource. It empowers us to connect more frequently and conduct ourselves more efficiently. And I want to take the web further.
                
              Technology is powerful, but for some users it's more like a hurdle. Wether that is because they're not technically inclined, their tools suffer from poor design or simply a solution that doesn't solve for them; I see opportunity to make our greatest innovations yet.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
