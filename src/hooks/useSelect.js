import React, {useState} from 'react';
import Categoria from '../components/Categoria'
const useSelect = (stateInicial, opciones) => {
   
    const [state, actualizarState] = useState(stateInicial);

    const handleSelect = (e) => {
        actualizarState(e.target.value);
    }

    const SelectNoticia = () => {
        return (
            <select className="form-control" value={state} onChange={handleSelect}>
                {opciones.map(option => (
                    <Categoria key={option.id} option={option}/>
                ))}
            </select>
        );
    }

    return [state, SelectNoticia];
    
}

export default useSelect;
