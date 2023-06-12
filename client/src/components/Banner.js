import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const Banner = () => {
    const [activeBanner, setActiveBanner] = useState(0)
    const imgs = [
        'https://webgradients.com/public/webgradients_png/011%20Dusty%20Grass.png',
        'https://webgradients.com/public/webgradients_png/023%20Rare%20Wind.png',
        'https://webgradients.com/public/webgradients_png/073%20Love%20Kiss.png',
        'https://webgradients.com/public/webgradients_png/004%20Juicy%20Peach.png'
       
       /* 'https://wptravel.io/wp-content/uploads/edd/2019/03/stripe-banner.jpg'*/
    ]
    const bannerL = () => {
        setActiveBanner(activeBanner === 0 ? 3 : (prev) => prev - 1)
    }

    const bannerR = () => {
        setActiveBanner(activeBanner === 3 ? 0 : (prev) => prev + 1)
    }

    return ( 
        <div className="w-full h-auto overflow-x-hidden">
            <div className="w-screen h-[650px]">
                <div className="w-[400vw] h-full flex transition-transform duration-700" 
                style={{transform:`translateX(-${activeBanner * 100}vw)`}}>
                    <img className="w-screen h-full object-cover" src={imgs[0]} alt="Banner1" loading="priority"/>
                    <img className="w-screen h-full object-cover" src={imgs[1]} alt="Banner2"/>
                    <img className="w-screen h-full object-cover" src={imgs[2]} alt="Banner3"/>
                    <img className="w-screen h-full object-cover" src={imgs[3]} alt="Banner4"/>
                </div>
                <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-40">
                    <div onClick={bannerL} className="w-16 h-14 border-[1px] border-black flex items-center justify-center 
                    hover:cursor-pointer hover:bg-slate-400 hover:text-white active:bg-slate-800 duration-300">
                        <BsArrowLeft />
                    </div>
                    <div onClick={bannerR} className="w-16 h-14 border-[1px] border-black flex items-center justify-center 
                    hover:cursor-pointer hover:bg-slate-400 hover:text-white active:bg-slate-800 duration-300">
                        <BsArrowRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;