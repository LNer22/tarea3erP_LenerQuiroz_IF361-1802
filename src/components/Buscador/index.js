import React, { useState, useRef } from 'react'
import { Contenedor, Input } from './styles'


const Buscador = ({filtrarProducto}) => {
    const [buscar, Guardar] = useState('')
    const reference = useRef(null);
    const handleChange = () =>{
        Guardar(reference.current.value)
        filtrarProducto(reference.current.value)
    }
    return (
        <Contenedor>
            <Input
                type='text'
                name='buscar'
                value={buscar}
                onChange={handleChange}
                ref={reference}
                placeholder='Buscar '
            />
        </Contenedor>
    )
}

export default Buscador
