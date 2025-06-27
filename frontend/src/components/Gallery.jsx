  import React, { useState } from 'react';
  import './Gallery.css'

  function Gallery() {
    const [filter, setFilter] = useState('all');

    const images = [
      { url: '/images/075E5437-320E-49D1-9562-595B82E33399-scaled.jpeg', type: 'Укладка плитки', createdAt: '2023-01-01' },
      { url: '/images/images (2).jpg', type: 'Отделочные работы', createdAt: '2023-02-01' },
      { url: '/images/remont-vannoy2-min.jpg', type: 'Электромонтаж', createdAt: '2023-03-01' },
      { url: '/images/sanuze_remont_2_21.jpg', type: 'Укладка плитки', createdAt: '2023-04-01' },
      { url: '/images/portfolio-1.jpg', type: 'Отделочные работы', createdAt: '2023-05-01' },
    ];

    const filteredImages = filter === 'all'
      ? images
      : images.filter(img => img.type === filter);

    const uniqueTypes = [...new Set(images.map(img => img.type))];  

    return (
      <div className="Gallery">
        <h2>Галерея проектов</h2>

        <div className="filter-buttons">
          <button onClick={() => setFilter('all')}>Все</button>
          {uniqueTypes.map((type) => (
            <button key={type} onClick={() => setFilter(type)}>{type}</button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={img.url} alt={img.type} />
              <p>{img.type}</p>
              <small>{img.createdAt}</small>
            </div>
          ))}
        </div>
      </div>
    );
  }

  export default Gallery;
