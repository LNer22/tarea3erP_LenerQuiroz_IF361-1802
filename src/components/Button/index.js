import { useContext } from 'react'
import { BUTTON } from './styles'
import AppContext from "../../context/AppContext";
export const Button = ({children, prod}) => {
    // Haciendo uso del contexto declaramos la función para añadir un producto al carrito
    const { agregarAlCarro } = useContext(AppContext)
    const clickAgregar = (prod) =>{
        agregarAlCarro(prod)
    }

    return (
        <BUTTON onClick={() => clickAgregar(prod)} >{children}</BUTTON>
    )
}
