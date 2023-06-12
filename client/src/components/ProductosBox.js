import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCesta } from '../redux/counterSlice';
import { toast, ToastContainer } from 'react-toastify'

const ProductosBox = ({producto}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const _id = producto.title;
  const idToString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  }

  const idRoot = idToString(_id)

  {/* Cambiar url de la pagina con el nombre del producto */}
  const detallesProductos = () => {
    navigate(`/product/${idRoot}`, {
      state: {
        item: producto
      }
    })
  }
  
  return (
    <div className='group relative'>
      <div onClick={detallesProductos} className='w-full h-96 cursor-pointer overflow-hidden'>
        <img src={producto.image} alt='productoImg' className='w-full h-full object-cover group-hover:scale-100 duration-500'/>
      </div>
      <div className='w-full border-[1px] px-2 py-4'>
        <div className='flex justify-between items-center'>
          <div>
              <h2 className='text-base font-bold'>{producto.title.substring(0, 15)}</h2>
          </div>
          <div className='relative flex justify-end gap-2 overflow-hidden w-28 text-sm'>
            <div className='flex gap-2 justify-end group-hover:translate-x-28 transition-transform duration-500'>
              <p className='line-through text-slate-300'>{producto.oldPrice}€</p>
              <p className='font-semibold'>{producto.price}€</p>
            </div>
            <p 
            onClick={() => 
              dispatch
                (addCesta({
                  _id: producto._id,
                  nombre: producto.title,
                  imagen: producto.image,
                  precio: producto.price,
                  cantidad: 1,
                  descripcion: producto.description
                })
              ) & toast.success(`${producto.title} añadido a la cesta`)
            } 
            className='absolute flex w-[120px] z-20 items-center text-slate-500 gap-1 top-0 transform -translate-x-32
            hover:text-slate-800 group-hover:translate-x-3 transition-transform cursor-pointer duration-500 text-sm'>
              Añadir cesta {" "}
              <span>
                <BsArrowRight />
              </span>
            </p>
          </div>
        </div>
        <div>
          <p>{producto.category}</p>
        </div>
        <div className='absolute top-4 right-0'>
          {
            producto.isNew && <p className='bg-black text-white font-semibold px-6 py-1'>Sale</p>
          }
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

export default ProductosBox