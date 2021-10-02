import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {

    const consultarAPI = async () => {
      
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=6f7dec2a2e3c4794bf7d9ded6753b7af`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles)
    }
    consultarAPI();
  }, [categoria])

  return (
    <Fragment>
      <Header
        titulo="Buscado de Noticias"
      />

      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
