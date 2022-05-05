import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../components/Observer';

export default function Index() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />

        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1'
        />
        <title>Duane McDonald | Software Developer</title>
        <meta
          name='description'
          content='Duane McDonald | Software Engineer | Small Business Solutions | Web Developer'
        />
        <meta name='author' content='Duane McDonald' />
      </Head>
      <Navbar />
      <Home />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Education />
      <Contact />
      <Footer />

      <a href='#home' className={'topHome'}>
        <FontAwesomeIcon size='3x' icon={faChevronUp} />
      </a>
    </>
  );
}
