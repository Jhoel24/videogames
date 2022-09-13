import { useState } from 'react'

export const useSelectOptions = (label, options) => {
    const [state, setState] = useState([])

    const handleSelect = e => {
        setState(state => [...state, e.target.value])
    }

    const SelectMonedas = () => (
        <>
            <label>{label}</label>
            <select
                onChange={ handleSelect }
            >
                <option value="">-- Select --</option>
                { options.map(option => (
                    <option 
                        key={option.id} 
                        value={ typeof option.id === 'number' ? option.name : option.id } 
                    >{option.name}</option>
                )) }
            </select>
        </>
    )

    return [state, SelectMonedas]
}