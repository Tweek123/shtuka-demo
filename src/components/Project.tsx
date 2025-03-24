import Image from 'next/image'
import Typography from './Typography'

const Project =  ({src,text,subtext}: {src: string,text: string, subtext: string}) => {
    return <div className="flex flex-col aspect-[2/3] flex-1 relative group">
        <Image
            className='absolute'
            src={src}
            alt='Background Image'
            layout='fill'
            objectFit='cover'
        />
    <div className="flex-col flex-grow absolute bg-black bg-opacity-40 h-[100%] w-[100%] group-hover:flex"></div>
    <div className="flex flex-col absolute bottom-0 left-0 border-4 border-[#EB2F5B] p-4 m-4 mr-auto max-w-60 group-hover:flex">
    <Typography className='mb-4 text-sm' fontFamily='VarelaRound' variant='p' color='text-[#fed841]'>{text}</Typography>
    <Typography className='text-base' variant='h1' fontFamily='womby' color='text-white'>{subtext}</Typography>
    </div>
    </div>
}

export default Project