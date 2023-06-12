import React from 'react';
import { logoN, cestaImg } from '../assets/index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const datosProducto = useSelector((state) => state.counter.datosProducto)
    const datosUsuario = useSelector((state) => state.counter.infoUser)
    return (
        <div className='w-full h-20 bg-white border-b-[1px] border-green-500 sticky top-0 z-50'>
            <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
                <Link to='/'>
                    <div>
                        <img className='w-28' src={logoN} alt='logoN'/>
                    </div>
                </Link>
                <div className='flex items-center gap-8'>
                    <ul className='flex items-center gap-8'>
                        <li className='text-base text-black font-bold 
                        hover:text-green-400 hover:underline underline-offset-2 
                        decoration-[1px] cursor-pointer duration-300'>Inicio</li>
                        <li className='text-base text-black font-bold 
                        hover:text-green-400 hover:underline underline-offset-2 
                        decoration-[1px] cursor-pointer duration-300'>Páginas</li>
                        <li className='text-base text-black font-bold 
                        hover:text-green-400 hover:underline underline-offset-2 
                        decoration-[1px] cursor-pointer duration-300'>Productos</li>
                        <li className='text-base text-black font-bold 
                        hover:text-green-400 hover:underline underline-offset-2 
                        decoration-[1px] cursor-pointer duration-300'>Elementos</li>
                        <li className='text-base text-black font-bold 
                        hover:text-green-400 hover:underline underline-offset-2 
                        decoration-[1px] cursor-pointer duration-300'>Blog</li>
                    </ul>
                    <Link to='/cesta'>
                        <div className='relative'>
                            <img className='w-8' src={cestaImg} alt='cestaImg' />
                            <span className='absolute w-8 bottom-4 left-6 text-sm flex items-center
                            justify-center font-semibold text-green-500'>{datosProducto.length}</span>
                        </div>
                    </Link>
                    <Link to='/login'>
                        <img className='w-10 h-10 rounded-full' 
                        src={datosUsuario 
                            ? datosUsuario.pfp 
                            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png?20220226140232'} 
                        alt='userPfp' referrerPolicy='no-referrer' />
                    </Link>
                    {
                        datosUsuario && (
                            <p className='text-base font-semibold underline underline-offset-2 text-green-600'>{datosUsuario.nombre}</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Header;
