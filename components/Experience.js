import Image from 'next/image';
const Experience = () => {
  return (
    <section id='experience' className={'experience'}>
      <div className={'container'}>
        <h2>Technical Experience</h2>
        <div className={'experience-lists'}>
          <ul>
            <h4>Languages</h4>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SQL</li>
            <li>Python</li>
          </ul>
          <ul>
            <h4 className={'frameworks'}>Frameworks & Libraries</h4>
            <div className={'frameworks-list'}>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Directus</li>
              <li>Holoviz</li>
              <li>Express</li>
              <li>Bootstrap</li>
              <li>Sass</li>
            </div>
          </ul>
          <ul>
            <h4>Technologies</h4>
            <div className={'technologies'}>
              <li>Git</li>
              <li>Github</li>
              <li>Rest API</li>
              <li>Graph API</li>
              <li>VS Code</li>
              <li>Adobe XD</li>
              <li>Heroku</li>
              <li>Vercel</li>
              <li>CPanel</li>
              <li>Wordpress</li>
              <li>SSH</li>
            </div>
          </ul>
        </div>
        <p className={'experienceBlurb'}>
          I champion writing lean, clean and practical code. Readability is key.
          I love testing new versions, features and frameworks. I spend
          dedicated time every week reading coding and programming news and well
          as version release and documentation.
        </p>
      </div>
    </section>
  );
};
export default Experience;
