import React from 'react';

const SocialLinks = ({links}) => {
  return (
    <div className='social-links-container'>
      <nav className="social-links" style={{ '--count': links.length }}>
        <ul>
            {
                links.map((link, i) => (
                    <li style={{ '--index': i }} key={link.url}>
                        <a href={link.url} target="_blank" rel="noreferrer noopener">
                        <span>
                            {link.icon}
                            {/* {link.name} */}
                        </span>
                        </a>
                    </li>
                ))
            }
        </ul>
      </nav>
    </div>
  );
};

export default SocialLinks;
