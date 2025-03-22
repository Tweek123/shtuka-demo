import React from 'react'
import Typography from './Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-brands-svg-icons'



const Info = ({icon, text, subtext}: {icon: IconDefinition, text:  string | React.ReactElement, subtext: string  | React.ReactElement}) => {
    return <div className="flex flex-col w-full text-center mb-9 justify-center items-center py-20 px-4">
        <FontAwesomeIcon height={64} width={64} className='mb-16 text-[#ce528e]' icon={icon} />
        {typeof text === 'string'? <Typography className='text-[#111] text-4xl mb-9 hover:text-[#ce528e]' fontFamily='womby' variant='h1'>{text}</Typography>: text}
        {typeof subtext === 'string'  ? <Typography className='text-black text-base hover:text-[#ce528e]' fontFamily='womby' variant='h1'>{subtext}</Typography>: subtext}
    </div>
}



export default Info