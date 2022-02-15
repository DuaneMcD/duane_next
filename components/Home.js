import Image from 'next/image';
import newyork from '../components/images/nyc_sky.jpg';

const Home = () => {
  return (
    <section id='home' className={'home'}>
      <div className={'banner-container'}>
        {/* <Image
          className={'heroImage'}
          src={newyork}
          alt='New York City Skyline'
          priority
          placeholder='blur'
          layout='fill'
          objectFit='cover'
          quality={100}
        /> */}
      </div>
      <span className={'spacer'}></span>
    </section>
  );
};

export default Home;
