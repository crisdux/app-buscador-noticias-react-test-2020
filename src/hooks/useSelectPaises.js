import React, {useState} from 'react';
import Pais from '../components/Pais'
const useSelect = (stateInicial, opciones) => {
   
    const [state, actualizarState] = useState(stateInicial);

    const handleSelect = (e) => {
        actualizarState(e.target.value);
    }

    const SelectPais = () => {
        return (
            <select className="form-control" value={state} onChange={handleSelect}>
                {opciones.map(option => (
                    <Pais key={option.id} option={option}/>
                ))}
            </select>
        );
    }

    return [state, SelectPais];
    
}

export default useSelect;
