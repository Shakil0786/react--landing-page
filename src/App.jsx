import { useEffect, useState } from 'react'
import Background from "./Components/Backgrounds/Background";
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
// rafc for create 
const App = () => {
  let heroData=[
    {text1:"Dive into",text2:"what you love "},
    {text1:"Indulge",text2:"your Passions"},
    {text1:"Give in to ",text2:"your Passions"}
]
const [heroCount,setHeroCount]=useState(0);
const [playStatus,setPlayStatus]=useState(false);

useEffect(()=>{
  const interval=setInterval(()=>{
    setHeroCount((prevCount)=>{return prevCount===2?0:prevCount+1});
  },3000)

  return ()=>clearInterval(interval);
})



return (
<div>
  <Background playStatus={playStatus} heroCount={heroCount}/>
  {/* <button onClick={()=>setPlayStatus(!playStatus)}>Toggle Play</button> */}

  <Navbar/>
  <Hero
   setPlayStatus={setPlayStatus}
   heroData={heroData [heroCount]}
   heroCount={heroCount}
   setHeroCount={setHeroCount}
   playStatus={playStatus}

  />
  

</div>
)
}

export default App
