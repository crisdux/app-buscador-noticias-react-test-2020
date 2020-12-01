import React from 'react';

const Categoria = ({option}) => {
    const {categoria, label} = option;
    return (
        <>
            <option value={categoria}>{label}</option>
        </>
    );
}

export default Categoria;
