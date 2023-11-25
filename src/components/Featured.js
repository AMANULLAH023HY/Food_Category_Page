import React, { useState } from 'react'
import {BsChevronBarRight, BsChevronBarLeft } from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx'

export default function Featured() {

    const slider = [
        {
            url: 'https://source.unsplash.com/random/900×700/?burger'
        },
        {
            url: "https://source.unsplash.com/random/900×700/?pizza"
        },
        {
            url: "https://source.unsplash.com/random/900×700/?Hamburger"
        }, 
        {
            url: "https://source.unsplash.com/random/900×700/?Spaghetti"
        },
         {
            url: "https://source.unsplash.com/random/900×700/?Sushi"
        }, 
        {
            url: "https://source.unsplash.com/random/900×700/?Burrito"
        }, 
        {
            url: "https://source.unsplash.com/random/900×700/?Donut"
        }, 
        {
            url: "https://source.unsplash.com/random/900×700/?Cucumber"
        }, 
        {
            url: "https://source.unsplash.com/random/900×700/?Nachos"
        },
        {
            url: "https://source.unsplash.com/random/900×700/?Omelette"
        },
        {
            url: "https://source.unsplash.com/random/900×700/?Tiramisu"
        },
        {
            url: "https://source.unsplash.com/random/900×700/?Paella"
        },
        {
            url: "https://source.unsplash.com/random/900×700/?Goulash"
        },
        {
            url: "https://source.unsplash.com/random/900×700/?Cheesecake"
        },
        {
            url: "https://source.unsplash.com/random/900×700/?Gumbo"
        },
        {
            url: "https://source.unsplash.com/random/900×700/?Poutine"
        },

    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlider = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slider.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex);
    }

    const nextSlider = () => {
        const isFirstSlide = currentIndex === slider.length - 1
        const newIndex = isFirstSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex);
    }


    const moveToSlide = (slideIndex)=>{
        setCurrentIndex(slideIndex)
    } 


    return (
        <>

            <div className=' max-w-[1520px] h-[500px] w-full py-4 px-4 relative group'>
                <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500' style={{ backgroundImage: `url(${slider[currentIndex].url})` }}></div>


                <div className=' hidden group-hover:block absolute  top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-gray-400 cursor-pointer'>
                    <BsChevronBarLeft className='text-white' onClick={prevSlider} />
                </div>

                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-gray-400 cursor-pointer'>
                    <BsChevronBarRight className='text-white' onClick={nextSlider} />
                </div>

                <div className='flex top-4 justify-center py-2' >
                    {
                        slider.map((sliderItem, slideIndex)=>(
                            <div className='text-2xl cursor-pointer'
                            key={slideIndex}
                            onClick={()=>moveToSlide(slideIndex)}
                            >
                                <RxDotFilled/>
                            </div>
                        ))
                    }
                </div>


            </div>


        </>
    )
}
