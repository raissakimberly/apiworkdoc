import React, { useState } from 'react';
import { search } from './db/filmes';
import MovieCard from './movieCard';
import MovieDetails from './movieDetails'; 
import './Pesquisa.css';
import arteImage from './Media/arte.png';

function Pesquisa() {
  const [pesquisar, setPesquisar] = useState('');
  const [filtro, setFiltro] = useState([]);
  const [campoPesquisaAtivo, setCampoPesquisaAtivo] = useState(false);
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  
  function handleMovieClick(selectedMovie) {
    setFilmeSelecionado(selectedMovie);
    setMostrarDetalhes(true);
  }

  function handlePesquisar(event) {
    const controlePesquisa = event.target.value.toLowerCase();
    const filmesFiltrados = search.filter((filme) =>
      filme.Title.toLowerCase().includes(controlePesquisa)
    );
    setPesquisar(controlePesquisa);
    setFiltro(filmesFiltrados);
  }

  function handleCampoPesquisaClick() {
    setCampoPesquisaAtivo(!campoPesquisaAtivo);
  }

  return (
    <div className="custom-container">
      <img src={arteImage} alt="Arte" className="corner-image" />
      <h1>Buscar Filmes</h1>
      <div className={`custom-input ${campoPesquisaAtivo ? 'active' : ''}`}>
        <input
          type="text"
          value={pesquisar}
          onChange={handlePesquisar}
          onClick={handleCampoPesquisaClick}
          className="form-control"
          placeholder="Digite o nome do filme..."
          aria-label="Digite o nome do filme"
          aria-describedby="button-search"
        />
        <button className="btn btn-custom" type="button" id="button-search">
          Pesquisar
        </button>
      </div>
      <div className="filme-container">
        <div className="lista-resultados">
          <h2>Resultados da pesquisa:</h2>
          <div className="card-container">
            {filtro.map((filme) => (
              <MovieCard
                key={filme.imdbID}
                title={filme.Title}
                year={filme.Year}
                posterUrl={filme.Poster}
                onTitleClick={() => handleMovieClick(filme)}
              />
            ))}
          </div>
        </div>
        <div className="detalhes-filme">
          {mostrarDetalhes && (
            <MovieDetails selectedMovie={filmeSelecionado} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Pesquisa;
