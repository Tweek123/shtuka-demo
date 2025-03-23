import Image from 'next/image'
import Typography from './Typography'

const Project =  () => {
    return <div className="flex flex-col aspect-square flex-1 relative group">
        <Image
            className='absolute'
            src='https://1shtuka.ru/wordpress/wp-content/uploads/2025/03/р1.jpg'
            alt='Background Image'
            layout='fill'
            objectFit='cover'
        />
    <div className="flex-col flex-grow absolute bg-black bg-opacity-50 h-[100%] w-[100%] hidden group-hover:flex"></div>
    <div className="flex flex-col absolute bottom-0 left-0 border-8 border-[#EB2F5B] p-4 m-4 mr-auto max-w-96 hidden group-hover:flex">
    <Typography className='mb-4' fontFamily='VarelaRound' variant='p' color='text-[#fed841]'>ХОЛЛ ЧАСТНОГО ДОМА</Typography>
    <Typography variant='h1' fontFamily='womby' color='text-white'>РОСПИСЬ СТЕН ХУДОЖНИКОМ, ИНДИВИДУАЛЬНЫЙ ДИЗАЙН НАПОЛЬНОЙ ПЛИТКИ</Typography>
    </div>
    </div>
}

export default Project