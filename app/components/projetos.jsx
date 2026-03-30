"use client"

import DotGrid from '../../components/DotGrid';
import kley from "@/public/kley.jpg"
import Cine from "@/public/cine.jpg"
import Intell from "@/public/intell.jpg"

import Image from "next/image";



export default function depoimento(){
    return(
        <div className=" md:pt-10 mt-40  flex justify-center bg-[#01021c] p-10" >

            <div className="absolute inset-0  z-0  ">
                   <DotGrid
                dotSize={6}
                gap={15}
                baseColor="#01021c"
                activeColor="#f50000"
                proximity={80}
                shockRadius={180}
                shockStrength={5}
                resistance={750}
                returnDuration={0.3}
              />
                  </div>
                  <div className=' flex  gap-10 flex-wrap'>
                    <div className='flex-col flex  relative   z-[2000] md:flex  flex-wrap '>

                     <Image className='md:w-100' src={kley} alt="Celular" />
                     <div className='bg-[#181ff52a] w-100 h-30 text-center'>
                        <h2 className='text-[22px] m-3 font-light text-[#ffffffe7]'>Documentação Front-end</h2>
                        <p className='text-[#ffffff7e]'>Desenvolvimento web</p>
                        
                     </div>

                    </div >


                     <div className='flex-col flex  relative   z-[2000] md:flex  flex-wrap '>

                     <Image className='md:w-100' src={Cine} alt="Celular" />
                     <div className='bg-[#181ff52a] w-100 h-30 text-center'>
                        <h2 className='text-[22px] m-3 font-light text-[#ffffffe7]'>Projeto cinema</h2>
                        <p className='text-[#ffffff7e]'>Desenvolvimento web</p>
                        
                     </div>

                    </div >

                     <div className='flex-col flex  relative   z-[2000] md:flex  flex-wrap '>

                     <Image className='md:w-100' src={Intell} alt="Celular" />
                     <div className='bg-[#181ff52a] w-100 h-30 text-center'>
                        <h2 className='text-[22px] m-3 font-light text-[#ffffffe7]'>Intell Clone</h2>
                        <p className='text-[#ffffff7e]'>Desenvolvimento web</p>
                        
                     </div>

                    </div >

                  </div>

        </div>
    ); 
}