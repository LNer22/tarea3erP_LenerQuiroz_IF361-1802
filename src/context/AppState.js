import { useState, useEffect } from 'react'
import AppContext from './AppContext'
import { dataProductos } from '../data'


const AppState = ({ children }) => {
    const [articulos, guardarArticulo] = useState([])
    const [carrito, guardarCarrito] = useState([])

    // Carga la lista de productos
    useEffect(() => {
        guardarArticulo(dataProductos)
    }, [])

    /**
     * Agregar un producto al carrito   
     * @param {text} producto Producto a añadir al carrito
     * @returns 
     */
    const agregarAlCarro = (producto) => {
        // 1- Verificar si el producto clickeado ya està en el carrito
        if (carrito.find(x => x.id === producto.id)) {
            // 2- En caso de ya estar en el carrito, aumentamos la cantidad en 1
            const carritoCopia = carrito.map(x => x.id === producto.id ? ({ ...x, cantidad: x.cantidad + 1 }) : x)
            guardarCarrito(carritoCopia)
            return
        }
        guardarCarrito([...carrito, { ...producto, cantidad: 1 }])
    }

    /**
     * Elimina un producto del carrito
     * @param {text} producto Producto a eliminar del carrito
     */
    const eliminarProducto = producto => {
        // Se filtra la lista de productos y se elimina el articulo previamente definido
        const nuevaLista = carrito.filter(item => item.id !== producto.id)
        // Se guarda la nueva lista de productos
        guardarCarrito(nuevaLista)
    }

    /**
     * Filtra la lista de productos para mostrar únicamente los que contengan la cadena de texto
     * enviada como parametro de la función
     * @param {text} nombre letra o palabra para filtrar los productos
     */
    const filtrarProducto = nombre => {
        let nuevaLista = []
        // Se verifica si la cadena de texto suministrada no se encuentre vacía, de ser así mostrar todos los
        // productos, caso contrario unicamente mostrar los productos filtrados
        nombre !== ''? nuevaLista = dataProductos.filter(x=>x.nombre.toLowerCase().includes(nombre.toLowerCase()) ):
        nuevaLista = dataProductos
        // Se guarda la nueva lista de productos
        guardarArticulo(nuevaLista)
    }

    return (
        <AppContext.Provider
            value={{
                articulos: articulos,
                carrito: carrito,
                agregarAlCarro,
                eliminarProducto,
                filtrarProducto
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppState
