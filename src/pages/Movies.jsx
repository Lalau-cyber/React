import React from 'react';

const Movies = () => {
  const moviE = [
    {
      id: 1,
      title: "Interstellar",
      image: "https://m.media-amazon.com/images/S/pv-target-images/144718a9727062e06b9ebb1e1e7cc389d6eb2a6732dff8ae688c6487eebbdef8.jpg",
      link: "https://www.imdb.com/title/tt0816692/"
    },
    {
      id: 2,
      title: "De ferias com você",
      image: "https://www.adorocinema.com/filmes/filme-317394/",
      link: "https://www.adorocinema.com/filmes/filme-317394/"
    }
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Filmes Recomendados</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {moviE.map(movie => (
          <div key={movie.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', width: '160px' }}>
            <img src={movie.image} alt={movie.title} style={{ width: '100%', borderRadius: '4px' }} />
            <h3>{movie.title}</h3>
            <a href={movie.link} target="_blank" rel="noopener noreferrer">Ver detalhes no AdoroCinema</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;