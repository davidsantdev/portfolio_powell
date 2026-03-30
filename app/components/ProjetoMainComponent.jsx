"use client";
import DotGrid from '../../components/DotGrid';
import celular from "@/public/celular.png"
import Image from "next/image";

export default function ProjetoMain(){
    return(
        <div className=" md:pt-70 mt-40  flex justify-center " >

            
                  <div className="absolute inset-0 h-300 z-0 bg-[#02071C] ">
                   <DotGrid
                dotSize={6}
                gap={15}
                baseColor="#02071c"
                activeColor="#00ffbf"
                proximity={80}
                shockRadius={180}
                shockStrength={5}
                resistance={750}
                returnDuration={0.3}
              />
                  </div>

                  <div className=" w-[70%] " id='Projeto'>

                  <div className='relative text-[20px] text-white z-[2000] md:flex  flex-wrap'>
                    <div className=' '>
                    <div>
                      <h1 className="text-[#f3f6ff]  md:text-[120px] text-[70px] font-bold leading-20">
                         Meu</h1>
                          <h1 className="text-[#f3f6ff]  md:text-[120px] text-[70px] font-bold ">
                         Projeto</h1>
                          <h1 className="text-[#f3f6ff]  md:text-[120px] text-[70px] font-bold leading-20 ">
                         Principal</h1>

                         </div>

                         <div className='md:mt-20 '>

                         <p className="text-[#64FFDA] md:text-[20px] text-[17px] font-light md:w-[100%] w-[300px]">
                            Este projeto foi desenvolvido para uma empresa real.
     
                           </p>

                            <p className="text-[#ffffffa9]  md:text-[20px] text-[14px] md:pt-15 md:w-[650px] w-100 h">
                                Desenvolvi um sistema web para supermercado com carrinho de compras, listagem de produtos e 
                                integração com WhatsApp para finalização de pedidos, utilizando Nuxt, Shadcn e 
                                TypeScript. Criei a interface, organizei a exibição de ofertas e implementei toda
                                 a lógica de interação do usuário.
     
                           </p>

                           <div className='mt-7 flex md:gap-5 gap-2'>

                             <a href="https://alopara.vercel.app/">
                            <button className=' border-2 border-[#64FFDA] p-5 rounded-[10px] transition-all duration-300 ease-in-out hover:bg-[#64FFDA] hover:text-black'>
                            Veja o site ao vivo
                            
                           </button>


                           </a>

                       
                             



                           <a href="https://github.com/davidsantdev/Site_Institucional_alopara">
                            <button className=' border-2 border-[#64FFDA] p-5 rounded-[10px] transition-all duration-300 ease-in-out hover:bg-[#64FFDA] hover:text-black'>
                            Veja meu código 
                            
                           </button>


                           </a>

                             

                           </div>

                          
                         </div>

                    </div>

                    <div>
                        <Image className='md:w-100' src={celular} alt="Celular" />
                    </div>



                  </div>




          
        </div>
        </div>


    );
}