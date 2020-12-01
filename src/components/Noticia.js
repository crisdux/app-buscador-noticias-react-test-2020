import React from "react";

const Noticia = ({ noticia }) => {
  const { author:autor, title:titulo, description:descripcion, url, urlToImage, source } = noticia;
  const imagen = (urlToImage) && (
    <img src={urlToImage} alt={titulo} />
  )
  return (
    <div className="col-md-6 com-sm-12">
      <div class="card m-1">
        <h4 class="card-title pt-2 pl-2 font-weight-bold">{titulo}</h4>
        <h6 class="card-subtitle mb-2 text-muted pt-2 pl-2">Escrito por: {autor}</h6>
        <div class="card-body pt-2 pl-2">
          <p class="card-text">{descripcion}</p>
        </div>
        {imagen}
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Noticia Completa
        </a>
        <div class="card-footer text-center font-weight-bold"><span className="text-muted"> Fuente:</span> {source.name}</div>
      </div>
    </div>
  );
};

export default Noticia;
