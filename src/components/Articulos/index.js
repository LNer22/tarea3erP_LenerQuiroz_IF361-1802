import { useContext } from 'react'
import { Articulo } from "../Articulo";
import { Container } from './styles';
import AppContext from "../../context/AppContext";

export const Articulos = () => {
    // Haciendo uso del contexto declaramos los articulos
    const { articulos } = useContext(AppContext)

    return (
        <Container >
            {
                articulos.map(prod => 
                    // <Articulo nombre={prod.nombre} precio={prod.precio} imagen={prod.imagen} />
                    <Articulo
                        key={prod.id}
                        prod={prod}
                    />
                )
            }
        </Container>
    )
}