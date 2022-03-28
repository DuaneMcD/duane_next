import Image from 'next/image';
const Experience = () => {
  return (
    <section id='experience' className={'secPad experience'}>
      <div className={'container'}>
        <h2>Technical Experience</h2>
        <div className={'experience-lists'}>
          <ul>
            <h4>Languages</h4>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Python</li>
          </ul>
          <ul>
            <h4 className={'frameworks'}>Frameworks & Libraries</h4>
            <li>Bootstrap</li>
            <li>Sass</li>
            <li>Node.js</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Express</li>
          </ul>
          <div className={'technologies'}>
            <h4>Technologies</h4>
            <div className={'technologies-list'}>
              <ul className={'tech-list'}>
                <li>Git</li>
                <li>Github</li>
                <li>Rest API</li>
                <li>Graph API</li>
                <li>VS Code</li>
              </ul>
              <ul className={'tech-list2'}>
                <li>Adobe XD</li>
                <li>Heroku</li>
                <li>CPanel</li>
                <li>Wordpress</li>
                <li>SSH</li>
              </ul>
            </div>
          </div>
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
