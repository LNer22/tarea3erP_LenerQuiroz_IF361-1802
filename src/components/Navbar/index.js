import { useContext } from 'react'
import { Carro } from '../Carro'
import Buscador from '../Buscador';
import { Nav } from './styles'
import AppContext from "../../context/AppContext";

export const Navbar = () => {
    //Declaramos los parametros estalecidos en el contexto
    const { carrito, eliminarProducto, filtrarProducto } = useContext(AppContext)

    let cantidad = carrito.reduce((acum, actual) => acum + actual.cantidad, 0)
    return (
        <Nav color='red'>
            <p>Logo</p>
            <Buscador filtrarProducto={filtrarProducto} />
            <Carro cantidad={cantidad} productos={carrito} eliminarProducto={eliminarProducto} />
        </Nav>
    )
}