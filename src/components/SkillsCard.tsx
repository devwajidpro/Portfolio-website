import Image from "next/image";

interface SkillCardProps  {
    image: string,
    title: string,
}


export default function SkillsCard({image, title}: SkillCardProps) {
    return (
        <>
        <div className="p-4 hover:border border-[#561c8d] hover:-translate-y-1 transition duration-300 rounded-2xl shadow w-[45%] sm:w-[26%] md:w-[18%] lg:w-[15%] xl:w-[13%] max-w-xl min-w-0 bg-[#191d38]/95 backdrop-blur-xl group">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-30 blur transition duration-300"></div>
            <Image className="object-contain bg-none rounded-lg max-h-20 w-full group-hover:scale-105 transition-all" src={image} alt={title} width={10} height={10}/>
            <p className= "text-center bg-linear-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent text-sm sm:text-sm md:text-sm lg:text-sm xl:text-xl font-semibold ml-2 mt-4">
                {title}
            </p>
        </div>
        </>
    );
};