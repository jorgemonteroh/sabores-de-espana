import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'

import { logoB, paymentImg } from '../assets'
import {
    FaTwitter,
    FaFacebookF,
    FaInstagram,
    FaTiktok
} from 'react-icons/fa'

import {
    BsPersonFill
} from 'react-icons/bs'

import {
    BiHelpCircle,
    BiPackage
} from 'react-icons/bi'

import {
    SlPaypal
} from 'react-icons/sl'

const Footer = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_z941ulo', 'template_m2bmnkt', form.current, 'jlbfrPc0qcqRmPEgY')
        .then((result) => {
            console.log(result.text)
        }).catch((err) => {
            console.log(err.text);
        });
    }

  return (
    <div className='bg-black text-slate-400 py-20'>
        <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
            {/* ########## Iconos ########## */}
            <div className='flex flex-col gap-5'>
                <img src={logoB} alt='logoB' className='w-32' />
                <p className='text-white text-sm tracking-wide'>© License 2023</p>
                <img src={paymentImg} alt='paymentImg' className='w-40' />
                <div className='flex gap-4 text-lg text-slate-400'>
                    <FaTwitter className='hover:text-white duration-300 cursor-pointer'/>
                    <FaFacebookF className='hover:text-white duration-300 cursor-pointer'/>
                    <FaInstagram className='hover:text-white duration-300 cursor-pointer'/>
                    <FaTiktok className='hover:text-white duration-300 cursor-pointer'/>
                </div>
            </div>
            {/* ########## Sobre Nosotros ########## */}
            <div>
                <h2 className='text-2xl font-semibold text-white mb-4'>Sobre Nosotros</h2>
                <div className='text-base flex flex-col gap-2'>
                    <p>Arroyomolinos, Madrid ~ España.</p>
                    <p>934-456-123</p>
                    <p>contact@gmail.com</p>
                </div>
            </div>
            {/* ########## Perfil Usuario ########## */}
            <div>
                <h2 className='text-2xl font-semibold text-white mb-4'>Opciones de Usuario</h2>
                <div className='flex flex-col gap-2 text-base'>
                    <p className='flex items-center gap-2 hover:text-white duration-300 cursor-pointer'>
                        <span><BsPersonFill size={18}/></span>
                        Mi Usuario
                    </p>
                    <p className='flex items-center gap-2 hover:text-white duration-300 cursor-pointer'>
                        <span><SlPaypal size={18}/></span>
                        Pago
                    </p>
                    <p className='flex items-center gap-2 hover:text-white duration-300 cursor-pointer'>
                        <span><BiPackage size={20}/></span>
                        Seguimiento de pedidos
                    </p>
                    
                    <p className='flex items-center gap-2 hover:text-white duration-300 cursor-pointer'>
                        <span><BiHelpCircle size={20}/></span>
                        Ayuda & Soporte
                    </p>
                </div>          
            </div>
            {/* ########## Perfil Usuario ########## */}
            <form ref={form} onSubmit={sendEmail} className='flex flex-col justify-center'>
                <input className='h-12 bg-transparent border px-4 py-2 text-sm' 
                type='email' name="from_name" placeholder='e-mail' />
                <textarea className='h-48 bg-transparent border px-3 py-4 text-sm top-0' 
                name='message' placeholder='mensaje' />
                <button type='submit' className='h-10 text-sm border text-white border-t-0 
                hover:bg-slate-500 active:bg-auto active:text-black'>
                    Enviar
                </button>
                {/* TODO: Limpiar formulario depués de envío */}
            </form>       
        </div>
    </div>
  )
}

export default Footer