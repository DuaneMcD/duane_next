import Image from 'next/image';

function Project(props) {
  const {
    image,
    id,
    title,
    hoverTitle,
    description,
    projectLink,
    ...inputProps
  } = props;
  return (
    <div className={'project'}>
      <p className={'portfolio-title'}>{title}</p>
      <Image src={image} alt='' />
      <div className={'onHover'}>
        <a
          href={projectLink}
          target='_blank'
          rel='noreferrer'
          className={'onHover-link'}>
          <h4 className={'hoverTitle'}>{hoverTitle}</h4>
          <h5 className={'description'}>{description}</h5>
          <i className={'fa fa-external-link fa-2x'}></i>
        </a>
      </div>
      <style jsx>
        {`
          .project {
            position: relative;
            margin: 1.35rem;
            transition: transform 800ms ease-out;
            width: 25%;
          }
          .project:hover {
            transform: scale(1.03);
          }
          .onHover:hover {
            background: rgba(85, 85, 85, 0.85);
            opacity: 1;
            border-radius: 0.1em;
          }

          .onHover {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            text-align: center;
            opacity: 0;
          }
          .hoverTitle {
            color: white;
            margin: 1em 0 0.75em 0;
            font-size: 2em;
          }
          .description {
            color: white;
            font-size: 1.25em;
            padding: 1.5em;
          }
        `}
      </style>
    </div>
  );
}

export default Project;
