import React from 'react'
import { MdOutlineClose } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { aumentarCantidad, deleteCesta, disminuirCantidad, vaciarCesta } from '../redux/counterSlice';
import { ToastContainer, toast } from 'react-toastify';

const ProductoCesta = () => {
    const dispatch = useDispatch()
    const datosProducto = useSelector((state) => state.counter.datosProducto)
    return <div className='w-2/3 pr-12'>
        <div className='w-full'>
            <h2 className='text-2xl'>Cesta de la Compra</h2>
        </div>
        <div>
            {datosProducto.map((item) => (
                <div className='flex items-center justify-normal gap-5 mt-5' key={item._id}>
                    <div className='flex items-center gap-2'>
                        <MdOutlineClose 
                        onClick={()=>dispatch(deleteCesta(item._id)) & toast.error(`${item.nombre} se ha eliminado`)}
                        className='text-xl text-slate-500 hover:text-red-600 cursor-pointer duration-300' />
                        <img src={item.imagen} alt='prodImg' className='w-28 h-28 object-cover' />
                    </div>
                    <h2 className='w-48'>{item.nombre}</h2>
                    <p className='w-12'>{item.precio}€</p>
                    <div className='w-48 flex items-center justify-between text-slate-400 gap-3 border p-3'>
                        <p className='text-sm'>Cantidad</p>
                        <div className='flex items-center gap-3 text-sm font-semibold'>
                            <span 
                            onClick={()=>
                                dispatch(
                                    disminuirCantidad({
                                        _id: item._id,
                                        nombre: item.title,
                                        imagen: item.image,
                                        precio: item.price,
                                        cantidad: 1,
                                        descripcion: item.description
                                    })
                                )
                            } 
                            className='border h-6 font-normal text-lg flex items-center justify-center px-2
                            hover:bg-slate-600 hover:text-white cursor-pointer duration-300 active:bg-black'>-</span>
                            {item.cantidad}
                            <span 
                            onClick={()=>
                                dispatch(
                                    aumentarCantidad({
                                        _id: item._id,
                                        nombre: item.title,
                                        imagen: item.image,
                                        precio: item.price,
                                        cantidad: 1,
                                        descripcion: item.description
                                    })
                                )
                            } 
                            className='border h-6 font-normal text-lg flex items-center justify-center px-2
                            hover:bg-slate-600 hover:text-white cursor-pointer duration-300 active:bg-black'>+</span>
                        </div>
                    </div>
                    <p className='w-20 font-semibold'>{item.cantidad * item.precio}€</p>            
                </div>
            ))}
        </div>
        <button 
        onClick={()=>dispatch(vaciarCesta()) & toast.error('Cesta vaciada')} 
        className='bg-red-400 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-700 duration-300'>Vaciar Cesta</button>
        <Link to="/">
            <button className='mt-8 ml-7 flex items-center gap-2 text-slate-400 hover:text-black duration-300'>
                <span>
                    <BsArrowLeft />
                </span>
                Seguir comprando
            </button>
        </Link>
        <ToastContainer
            position='top-left'
            autoClose={1800}
            hideProgressBar={false}
            newestOnTop={false}
            rtl={false}
            closeOnClick
            pauseOnFocusLoss
            pauseOnHover
            draggable
            theme='dark'
        />
    </div>
}

export default ProductoCesta