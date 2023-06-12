import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import ProductoCesta from '../components/ProductoCesta';
import { ToastContainer, toast } from 'react-toastify';
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios'

const Cesta = () => {
  const datosProducto = useSelector((state) => state.counter.datosProducto)
  const datosUsuario = useSelector((state) => state.counter.infoUser)
  const [totalCesta, setTotalCesta] = useState("")
  const [redirPagar, setRedirPagar] = useState(false)

  useEffect(() => {
    let precio = 0
    datosProducto.map((item) => {
      precio += item.precio * item.cantidad
      return precio
    })
    setTotalCesta(precio.toFixed(2))
  }, [datosProducto])
  
  const completarPedido = () => {
    if (datosUsuario) {
      setRedirPagar(true)
    } else {
      toast.error('Inicie sesión para completar su pedido')
    }
  }

  const payment = async(token) => {
    await axios.post("http://localhost:8000/pay", {
      amount: totalCesta * 100,
      token: token
    })
  }
  return (
    <div>
      <img src='https://webgradients.com/public/webgradients_png/154%20Grass%20Shampoo.png' alt='cestaImg' className='w-full h-60 object-cover' />
      <div className='max-w-screen-xl mx-auto py-16 flex'>
        <ProductoCesta />
        <div className='w-1/3 bg-slate-200 py-5 px-5'>
          <div className='flex flex-col gap-6 border-b-[2px] border-slate-500 pb-6'>
            <h2 className='text-2xl font-medium'>Cesta:</h2>
            <p className='flex items-center gap-4 text-base'>
              Subtotal{" "}
              <span className='font-bold text-lg'>
              {totalCesta}€
              </span>
            </p>
            <p className='flex items-center gap-4 text-base'>
              Dirección de envío{" "}
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </p>
          </div>
          <p className='font-semibold flex justify-between mt-6'>
            Total cesta <span className='text-xl font-bold text-green-500'>{totalCesta}€</span>
          </p>
          <button onClick={completarPedido} className='bg-black text-green-300 text-base w-full py-2 mt-6
          hover:bg-slate-800 duration-300'>Continuar al pago</button>
          {
            redirPagar && 
            <div className='w-full mt-6 flex items-center justify-center'>
              <StripeCheckout 
                stripeKey='pk_test_51NHZCWBURxKmhO2GYVUbCDNzhdXK4rD3CWed8hcEoBx0SbA2VKyHAyRjp9OObUetzT8XnOuO0c8I6nVp2E9hJBTc00MSSszQyq'
                name='TFG-App'
                amount={totalCesta * 100}
                currency='EUR'
                label='Finalizar pedido'
                description={`El coste de su compra es de ${totalCesta}€`}
                token={payment}
                email={datosUsuario.correo}
              />
            </div>
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

export default Cesta