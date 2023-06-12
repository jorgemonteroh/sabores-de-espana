import React from 'react'
import ProductosBox from './ProductosBox'

const Productos = ({productos}) => {
  return (
    <div className='py-10'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>
                Listado de productos
            </h1>
            <span className='w-20 h-[5px] bg-black' />
            <p className='max-w-[700px] text-slate-400 text-center'>
                Adquiere los productos de mayor calidad de toda España al mejor precio.
                Productos de todo tipo con los mejores ingredientes.
            </p>
            <span className='w-44 h-[5px] bg-black' />
        </div>
        <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
            {
                productos.map((item) => (
                    <ProductosBox key={item._id} producto={item} />
                ))
            }
        </div>
    </div>
  )
}

export default Productos