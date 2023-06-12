import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MdOutlineStar } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { addCesta } from '../redux/counterSlice'
import { toast, ToastContainer } from 'react-toastify'

const Producto = () => {
    const dispatch = useDispatch()
    const [detalles, setDetalles] = useState({})
    let [cantidadProd, setcantidadProd] = useState(1)
    const loc = useLocation()
    useEffect(() => {
        setDetalles(loc.state.item)
    }, [])
  return (
    <div>
        <div className='max-w-screen-xl mx-auto my-10 flex gap-10'>
            <div className='w-2/5 relative'>
                <img src={detalles.image} alt='prodImg' className='w-full h-[500px] object-cover' />
                <div className='absolute top-4 right-0'>
                { detalles.isNew && (
                    <p className='bg-black text-white font-semibold px-6 py-1'>Oferta</p>
                )} 
                </div>
            </div>
            <div className='w-3/5 flex flex-col justify-center gap-12'>
                <div>
                    <h2 className='text-4xl font-semibold'>{detalles.title}</h2>
                    <div className='flex items-center gap-4 mt-3'>
                        <p className='line-through text-slate-300'>{detalles.oldPrice}€</p>
                        <p className='text-2xl font-medium text-slate-900'>{detalles.price}€</p>
                    </div>
                </div>
                
                <p className='text-base text-slate-400 -mt-3'>{detalles.description}</p>
                <div className='flex gap-6'>
                    <div className='w-48 flex items-center justify-between text-slate-400 gap-3 border p-3'>
                        <p className='text-sm'>Cantidad</p>
                        <div className='flex items-center gap-3 text-sm font-semibold'>
                            <button 
                            onClick={() => setcantidadProd(cantidadProd === 1 ? cantidadProd = 1 : cantidadProd-1)} 
                            className='border h-6 font-normal text-lg flex items-center justify-center px-2
                            hover:bg-slate-600 hover:text-white cursor-pointer duration-300 active:bg-black'>-</button>
                            <span>
                                {cantidadProd}
                            </span>
                            <button 
                            onClick={() => setcantidadProd(cantidadProd + 1)} 
                            className='border h-6 font-normal text-lg flex items-center justify-center px-2
                            hover:bg-slate-600 hover:text-white cursor-pointer duration-300 active:bg-black'>+</button>
                        </div>
                    </div>
                    <button 
                    onClick={() => 
                        dispatch
                            (addCesta({
                            _id: detalles._id,
                            nombre: detalles.title,
                            imagen: detalles.image,
                            precio: detalles.price,
                            cantidad: cantidadProd,
                            descripcion: detalles.description
                            })
                        ) & toast.success(`${detalles.title} añadido a la cesta`)
                    } 
                    className='bg-black text-white py-2 px-5 active:bg-slate-700'>
                        Añadir a la cesta
                    </button> 
                </div>
                <p className='text-base text-slate-400'>Categoría: <span className='font-medium capitalize'>{detalles.category}</span></p>
            </div>
        </div>
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
  )
}

export default Producto