import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';
import { useState } from 'react';

export default function Card({ venueName, imgSrc, onCompare }: 
  { venueName: string, imgSrc: string, onCompare: Function }) {

  const [rating, setRating] = useState(0);

  return (
    <InteractiveCard>
      <div className='w-full h-[60%] relative rounded-t-lg'>
        <Image 
          src={imgSrc}
          alt='Venue Image'
          fill
          className='object-cover rounded-t-lg'
        />
      </div>

      <div className='w-full !mx-[20px] !my-[20px] text-black'>
        {venueName}
      </div>

      <Rating
        className='w-fit h-[10%] !mx-[20px]'
        id={venueName + " Rating"}
        name={venueName + " Rating"}
        data-testid={venueName + " Rating"}
        value={rating}
        onClick={(e)=>{
          e.stopPropagation();
        }}
        onChange={(e, newRating) => {
          const finalRating = newRating != null ? newRating : 0;
          setRating(finalRating);
          
          onCompare(venueName, finalRating); 
        }}
      />
    </InteractiveCard>
  );
}