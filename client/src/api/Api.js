import axios from 'axios'

export async function datosProductos() {
    const productos = await axios.get('https://tfg-api.vercel.app')
    return productos
}