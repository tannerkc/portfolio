import React from 'react';

const BrandGrid = ({brands}) => {
  return (
    <div style={styles.gridContainer}>
      {brands.map((brand, index) => (
        <a key={index} href={brand.href} style={styles.gridItem} target="_blank" className='backdrop-blur-2xl border-neutral-700 bg-neutral-800/30' rel="noopener noreferrer">
            <div style={{ borderRadius: '8px', overflow: 'hidden'}}>
                <img src={brand.src} alt={brand.title} style={styles.logo} className={brand.class} />
            </div>
        </a>
      ))}
    </div>
  );
};

const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
    gap: '20px',
    padding: '20px'
  },
  gridItem: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    padding: '10px',
    transition: 'transform 0.3s',
    textDecoration: 'none',
    backdropFilter: 'blur(5px)',
    webkitBackdropFilter: 'blur(5px)'
  },
  logo: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain'
  }
};

export default BrandGrid;
