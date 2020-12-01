import React from 'react';

const Pais = ({option}) => {
    const {abr, label} = option;
    return (
        <>
            <option value={abr}>{label}</option>
        </>
    );
}

export default Pais;
