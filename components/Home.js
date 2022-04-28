import Image from 'next/image';
import heroBanner from '../public/heroBanner.png';

const Home = () => {
  return (
    <section id='home' className={'home'}>
      <div className={'banner-container'}>
        <Image
          className={'heroBanner'}
          src={heroBanner}
          alt='VS Code Duane Function'
          priority={true}
          placeholder='blur'
          layout='responsive'
          objectFit='contain'
          quality={100}
        />
      </div>
    </section>
  );
};

export default Home;
