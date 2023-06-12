import React from 'react'

const About = () => {
  return (
    <div>
        <img src='https://webgradients.com/public/webgradients_png/079%20Summer%20Games.png' alt='cestaImg' className='w-full h-60 object-cover' />
        <div className='py-10'>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>
                    Sobre Nosotros
                </h1>
                <span className='w-20 h-[5px] bg-black' />
                <p className='max-w-[700px] text-slate-400 text-center'>
                <ul className='flex w-full items-center py-5 gap-12'>
                    <li>Envíos internacionales en 48/72h. Sin gastos de envío.</li>
                    <li>Atención al cliente y soporte por correo electrónico.</li>
                    <li>Pago seguro certificado por Stripe mediante tarjeta de crédito.</li>
                    <li>Autenticación fácil y segura con Google.</li>
                </ul>
                </p>
                <span className='w-44 h-[5px] bg-black' />
                <img src={'https://img.freepik.com/vector-premium/mapa-contorno-simple-estilizado-icono-espana-mapa-bosquejo-azul-ilustracion-vector-espana_160901-3506.jpg'} alt='mapaImg'/>
                <span className='w-20 h-[5px] bg-black' />
                <h3 className='text-2xl bg-black text-white py-4 w-96 text-center'>
                    Productos de toda España
                </h3>
            </div>
        </div>
    </div>
  )
}

export default About