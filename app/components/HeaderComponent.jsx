'use client'


export default function HeaderComponent(){
    return(
        <div>
            <header className="flex justify-end z-[1000] right-7 top-10 fixed">
                <div className="flex gap-7">
                    <div className="text-[18px] text-white">
                        <a href="/#Sobre">
                        <span className="text-[#64FFDA] font-bold z-1000 "  >00.</span> Sobre
                         </a>
                    </div>
                    <div className="text-[18px] text-white">
                         <a href="/#Projeto">
                        <span className="text-[#64FFDA] font-bold z-1000 "  >01.</span> Projetos
                         </a>
                    </div>
                    <div className="text-[18px] text-white">

                         <a href="/#contato">
                        <span className="text-[#64FFDA] font-bold z-1000 "  >02.</span> Contato
                         </a>
                    </div>

                   
                </div>


            </header>



        </div>
    );
}