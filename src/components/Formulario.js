import React, {useState} from 'react';
import useSelect from '../hooks/useSelect'
import useSelectPais from '../hooks/useSelectPaises'
import {OPCIONES, PAISES} from '../data/data-category'
const Formulario = ({setCategoria,setPais}) => {

    const [categoria, SelectNoticia] = useSelect('general', OPCIONES);
    const [pais, SelectPais] = useSelectPais('fr', PAISES);

    const buscarNoticias = (e) => {
        e.preventDefault();
        setCategoria(categoria);
        setPais(pais);
    }

    return (
        <div className="row text-center mt-4">
            <div className="col-md-12">
                <form onSubmit={buscarNoticias}>
                    <h2>Busca las noticias más importantes del mundo</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <SelectPais />
                        </div>
                        <div className="col-md-6">
                            <SelectNoticia />
                        </div>
                    </div>
                    <div>
                        <input type="submit" className="btn btn-outline-primary btn-lg my-3" value="Buscar..."/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Formulario;
