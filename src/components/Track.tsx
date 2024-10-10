type TrackProps = {
    src: string
    trackName: string
    dummyText: string
}

export const Track = ({src, trackName, dummyText}: TrackProps) => {
    return (
        <div className="h-fit w-full flex flex-col items-center">
            <div className="">
                <img className="object-cover w-full h-64 rounded-[35px]" src={src}/>
            </div>
            <h5 className="text-p26 font-bold text-center text-ellipsis mt-6">{trackName}</h5>
            <div className="mt-1">
                <p className="text-base text-center h-[120px] text-graycss text-ellipsis overflow-hidden">
                    {dummyText}
                </p>
            </div>
            <button className="text-p18 text-white bg-purplecss font-bold px-4 py-2 mt-12 rounded-p10
            translate-y-0 hover:shadow-gray-400 hover:shadow-lg hover:-translate-y-1.5 hover:transition-all">Learn More</button>
        </div>
    );
}