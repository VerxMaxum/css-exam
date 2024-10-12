import { Post } from './Post'

type SlideProps = {
  subData: {
    src: string;
    heading: string;
    posted: string;
  }[]
}

export const Slide = ({ subData }: SlideProps) => {
  return (
    <div className="slide">
      {
        subData.map((e) => {
          return (
            <Post post={e} />
          );
        })
      }
    </div>
  );
}