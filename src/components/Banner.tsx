'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Banner() {
  const [Index, setIndex] = useState(0)
  const bannerSrc = ['cover.jpg','cover2.jpg','cover3.jpg','cover4.jpg']

  const router = useRouter()

  return (
    <div className="relative w-screen h-[90vh] flex items-center justify-center !mt-[75px] p-[5px] overflow-hidden">
      <Image 
        src={`/img/${bannerSrc[Index]}`}
        alt="Venue Banner" 
        fill
        priority 
        className="object-cover"

        onClick={ (e)=>{
          e.stopPropagation()
          setIndex((Index+1)%bannerSrc.length)
        }}
      />
      
      <div className="relative z-10 w-1/2 bg-black/60 p-5 text-center text-white">
        <h1 className="text-4xl font-semibold font-serif">where every event finds its venue</h1>
        <h3 className="text-base font-sans">
          Finding the perfect venue has never been easier. Whether it's a wedding, corporate events,<br></br> 
          or private party, we connect people to the perfect places.
        </h3>
      </div>
      <button className="bg-white text-[#FA8072] border border-[#FA8072] 
      font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-5 right-10 
      hover:bg-[#FA8072] hover:text-white hover:border-transparent"
      onClick={ ()=>{
        router.push('/venue')
      }}>
        Select Venue
      </button>
    </div>
  );
}