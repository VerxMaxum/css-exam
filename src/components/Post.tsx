type PostProps = {
    post: {
        src: string;
        heading: string;
        posted: string;
    }
}

export const Post = ({ post }: PostProps) => {
    return(
        <div className="flex flex-col bg-post w-p315 h-p315 justify-end p-6 transition-all hover:scale-110">
            <h6 className="text-white text-p22 font-medium">{post.heading}</h6>
            <p className="text-white text-base">{post.posted}</p>
        </div>
    );
}