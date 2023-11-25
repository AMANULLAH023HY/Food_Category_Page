import React from 'react'

import { topPicks } from '../data/data';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function TopPicks() {
  return (
    <>

<h3 className='text-orange-500 font-bold text-center text-2xl'>Top Picks</h3>

<div className='hidden lg:flex max-w[1520] m-auto my-2 mx-2'>

<Splide options={{perPage: 4,gap:"0.5rem", grap: "free", }}>
{
  topPicks.map((item)=>{
    return(
      <SplideSlide key={item.id}>
      <div className='rounded-3xl relative'>
<div className=' absolute w-full h-full bg-black/50 rounded-3xl text-white'>
  <p className='px-3 font-bold pt-4 text-2xl'>{item.title}</p>
  <p className='px-3'>{item.price}</p>

<button className='border-dotted border-white text-white mx-2 absolute bottom-4' >Add To Card</button>

</div>
<img className='h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300 '  src={item.img} alt={item.title}/>

      </div>
      </SplideSlide>
    )
  })
}
</Splide>

</div>


    </>
  )
}
