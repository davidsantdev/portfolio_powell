"use client";

import { CursorifyProvider } from '@cursorify/react'
import Main from "./components/MainComponent";
import Prism from "../components/Prism";
import HeaderComponent from './components/HeaderComponent'
import MainProject from './components/ProjetoMainComponent'
import DotGrid from '../components/DotGrid';

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-[#02071C] ">
      <HeaderComponent></HeaderComponent>
      



      <div className="absolute inset-0 z-0">
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
  style={{ width: "100%", height: "100%" }} // 👈 AQUI
/>
      </div>


      <div className="relative z-50">
        <Main />


        
      </div>

      <div className="relative z-50">
     

        <MainProject/>
        
      </div>


    </div>
  );
}