import Typography from "./Typography"


const Quote = ({className, mode = 'defaut', text}: {className?: string, mode?: 'defaut'|'black' ,text: string}) => {
    if(mode === 'black') {
        return <div className={`border-8 border-[#EB2F5B] ${className}`}>
            <div className="relative flex flex-colp-4 bg-[#111111] p-8">
            <Typography className="text-lg leading-[3] uppercase whitespace-pre-line" variant="h1" fontFamily="ArialBlack" color="text-white">{text}</Typography>
            <div className="absolute border-[12px] bottom-[-20px] left-[40px] border-transparent border-l-[#111111] w-[0px] h-[0px] border-t-[#111111]"></div>
            </div>
        </div>
    }

    return <div className={`relative flex flex-col border-8 border-[#EB2F5B] p-4 ${className}`}>
        <Typography className="text-lg leading-[3] uppercase whitespace-pre-line" variant="h1" fontFamily="ArialBlack" color="text-[#332f2f]">{text}</Typography>
        <div className="absolute border-[12px] bottom-[-28px] left-[40px] border-transparent border-l-[#EB2F5B] w-[0px] h-[0px] border-t-[#EB2F5B]"></div>
        </div>
}

export default Quote