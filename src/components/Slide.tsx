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
    <div className="flex gap-16 px-16">
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