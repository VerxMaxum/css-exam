import { Slide } from './Slide'
import { useState, useEffect } from 'react'

type CarouselProps = {
    data: {
        src: string;
        heading: string;
        posted: string;
    }[][],
}

export const Carousel = ({ data }: CarouselProps) => {
  const [curr, setCurr] = useState(0);
  const next = () => {
    setCurr((curr) => curr === data.length-1 ? 0 : curr + 1);
  }

  console.log(curr);

  useEffect(() => {
    const slideInterval = setInterval(next, 10000)
    return () => clearInterval(slideInterval)
  }, [])

  return(
    <div className="flex transition-transform ease-out duration-1000"
    style={{transform: `translateX(-${curr * 1580}px)`}}>
      {
        data.map((e) => {
          return(
            <Slide subData={e} />
          )
        })
      }
    </div>
  );
}