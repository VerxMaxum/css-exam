type SubjectProps = {
    src: string
    code: string
    title: string
}

export const Subject = ({ src, code, title }: SubjectProps) => {
    return (
        <div className="h-fit bg-lgraycss pb-8 rounded-p20">
            <div className="rounded-p20 overflow-hidden">
                <img className="object-cover w-full h-96" src={src} />
            </div>
            <div>
                <h5 className="text-p26 text-primary font-bold ml-6 mt-6">{code}</h5>
                <h6 className="text-p22 font-medium text-base ml-6">{title}</h6>
            </div>
            <div className="flex justify-end">
                <button className="text-p18 text-white bg-purplecss font-bold px-4 py-2 rounded-p10 mr-6
              translate-y-0 hover:shadow-gray-400 hover:shadow-lg hover:-translate-y-1.5 hover:transition-all">Learn More</button>
            </div>
        </div>
    );
}