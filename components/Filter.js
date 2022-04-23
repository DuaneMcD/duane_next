import { useEffect } from 'react';

const Filter = ({
  projects,
  setDisplayedProjects,
  galleryFilter,
  setGalleryFilter,
}) => {
  useEffect(() => {
    if (galleryFilter === 'all') {
      setDisplayedProjects(projects);
      return;
    }
    const filtered = projects.filter(project =>
      project.tags.includes(galleryFilter)
    );
    setDisplayedProjects(filtered);
  }, [galleryFilter]);

  return (
    <nav id='filter' className={'col-md-12'}>
      <ul>
        <li>
          <a
            onClick={() => setGalleryFilter('all')}
            className={galleryFilter === 'all' ? 'active' : ''}>
            All
          </a>
        </li>
        <li>
          <a
            onClick={() => setGalleryFilter('next.js')}
            className={galleryFilter === 'next.js' ? 'active' : ''}>
            Next.js
          </a>
        </li>

        <li>
          <a
            onClick={() => setGalleryFilter('react')}
            className={galleryFilter === 'react' ? 'active' : ''}>
            React
          </a>
        </li>
        <li>
          <a
            onClick={() => setGalleryFilter('javascript')}
            className={galleryFilter === 'javascript' ? 'active' : ''}>
            Javascript
          </a>
        </li>
        <li>
          <a
            onClick={() => setGalleryFilter('python')}
            className={galleryFilter === 'python' ? 'active' : ''}>
            Python
          </a>
        </li>
        <li>
          <a
            onClick={() => setGalleryFilter('sql')}
            className={galleryFilter === 'sql' ? 'active' : ''}>
            SQL
          </a>
        </li>
      </ul>
      <style jsx>
        {`
          ul :hover {
            cursor: pointer;
          }
          a.active {
            color: white;
          }
        `}
      </style>
    </nav>
  );
};

export default Filter;
