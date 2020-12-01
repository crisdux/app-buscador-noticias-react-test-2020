import React from 'react';
import Noticia from './Noticia'
const ListarNoticias = ({data}) => {
    return (
        <div className="row">
            {data.map(noticia => (
                <Noticia key={noticia.url} noticia={noticia}/>
            ))}
        </div>
    );
}

export default ListarNoticias;
