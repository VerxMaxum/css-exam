import { Slide } from './Slide'
import { useState, useEffect } from 'react'
import { Post } from './Post';

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
    <>
      <div className="carousel-extend" style={{transform: `translateX(-${curr * 1580}px)`}}>
        {
          data.map((e) => {
            return(
              <Slide subData={e} />
            )
          })
        }
      </div>
      <div className="carousel-extend-small" style={{transform: `translateX(-${curr * 640}px)`}}>
        {
          data[0].map((e) => {
            return(
              <Post post={e} />
            )
          })
        }
      </div>
      <div className="indicators-main">
        <div className="indicators-wrapper">
          <button className={`indicator ${curr === 0 ? "bg-primary" : "bg-graycss"}`}
          onClick={() => setCurr(0)}></button>
          <button className={`indicator ${curr === 1 ? "bg-primary" : "bg-graycss"}`}
          onClick={() => setCurr(1)}></button>
          <button className={`indicator ${curr === 2 ? "bg-primary" : "bg-graycss"}`}
          onClick={() => setCurr(2)}></button>
          <button className={`indicator ${curr === 3 ? "bg-primary" : "bg-graycss"}`}
          onClick={() => setCurr(3)}></button>
        </div>
      </div>
    </>
  );
}