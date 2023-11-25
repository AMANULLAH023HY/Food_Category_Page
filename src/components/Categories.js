import React from 'react'
import { categories } from '../data/data'

export default function Categories() {
    return (
        <>


            <div className='max-w[1520px] m-auto px-4 py-4'>
                <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Trending Categoreis</h1>

                <div className='grid grid-cols-2 md:grid-cols-6 gap-5 py-5 px-2'>
                    {categories.map((item) => {
                        return(  
                        <div className='p-4 flex justify-centeritem-center hover:scale-105 duration-300'>
                            <img className='objec-cover rounder-xl w-40 h-10 cursor-pointer shadow-xl' src={item.image_}
                                alt={item.name}
                            />
                        </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

