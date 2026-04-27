export default function Home() {
  return (
    <main style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <section>
        <h2>Seja bem-vindo ao CineMundo! 🍿</h2>
        <p>Explore as melhores trilogias e clássicos do cinema mundial.</p>
      </section>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px', flexWrap: 'wrap' }}>
        {/* Exemplo de Card de Conteúdo */}
        <div style={{ width: '250px', border: '1px solid #ddd', borderRadius: '8px', padding: '10px' }}>
          <img 
            src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=200" 
            alt="Cinema clássico" 
            style={{ width: '100%', borderRadius: '5px' }}
          />
          <h3>Clássicos</h3>
          <p>Conheça a era de ouro de Hollywood.</p>
          <a href="https://www.imdb.com" target="_blank" rel="noreferrer" style={{ color: '#007bff' }}>
            Saiba mais no IMDB
          </a>
        </div>

        <div style={{ width: '250px', border: '1px solid #ddd', borderRadius: '8px', padding: '10px' }}>
          <img 
            src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=200" 
            alt="Ficção Científica" 
            style={{ width: '100%', borderRadius: '5px' }}
          />
          <h3>Sci-Fi</h3>
          <p>Viagens espaciais e tecnologias do futuro.</p>
          <a href="https://www.rottentomatoes.com" target="_blank" rel="noreferrer" style={{ color: '#007bff' }}>
            Ver críticas
          </a>
        </div>
      </div>
    </main>
  );
}