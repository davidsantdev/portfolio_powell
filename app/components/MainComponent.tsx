import Icones from "./IconesComponents";
import FluidGlass from '../../components/FluidGlass'
import StarBorder from '../../components/StarBorder'

export default function Main() {
  return(
    <div className="flex items-center justify-center md:mt-[10%] mt-50  " id="Sobre">

     

    
     <div className=" w-[70%]">
      <p className="text-[#64FFDA]  md:text-[20px]">
      Olá, meu nome é
      </p>





      <h1 className="text-[#f3f6ff] md:text-[100px] text-[50px] font-bold">
        David Powell Santos.</h1>

        <h2 className="text-[#cad1e6]  md:text-[70px] text-[30px] leading-15 font-bold">
        Eu crio aplicações web</h2>

        <p className="text-[#ffffffa9]  md:text-[20px] md:pt-15 md:w-[650px]">
      Sou engenheiro de software especializado em construir (e ocasionalmente projetar) experiências digitais excepcionais. Atualmente, estou focado em criar produtos acessíveis e centrados no usuário
      </p>

      <StarBorder 
      
  as="button"
  className="custom-class bg-transparent mt-10"
  color="cyan"
  speed="1s"
>
  Fale comigo
</StarBorder>




      <Icones/>

     </div>
     </div>

  );
}