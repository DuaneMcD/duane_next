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
          <h5 className={'hoverTitle'}>{hoverTitle}</h5>
          <h6 className={'description'}>{description}</h6>
          <i className={'fa fa-external-link fa-2x'}></i>
        </a>
      </div>
      <style jsx>
        {`
          .project {
            position: relative;
            margin: 10rem;
            transition: transform 500ms ease;
          }
          .project:hover {
            display: block;
            transform: scale(1.02);
          }

          .onHover {
            width: 100%;
            height: 100%;
            padding: -1em;
            position: absolute;
            top: 0;
            left: 0;
            text-align: center;
            // display: none;
          }
          .onHover:hover {
            display: block;
            background: rgba(150, 150, 150, 0.7);
            color: white;
          }

          .hoverTitle {
            color: white;
            margin: 5rem 0 4rem 0;
            font-size: 5em;
          }
          .description {
            color: white;
            font-size: 2em;
          }
        `}
      </style>
    </div>
  );
}

export default Project;
