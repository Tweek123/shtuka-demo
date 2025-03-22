import Typography from "./Typography"


const Quote = ({mode = 'black', text}: {mode?: 'defaut'|'black' ,text: string}) => {
    if(mode === 'black') {
        return <div className="border-8 border-[#EB2F5B]">
            <div className="relative flex flex-colp-4 bg-[#111111] p-8">
            <Typography variant="h1" fontFamily="ArialBlack" color="text-white">{text}</Typography>
            <div className="absolute border-[12px] bottom-[-20px] left-[40px] border-transparent border-l-black w-[0px] h-[0px] border-t-black"></div>
            </div>
        </div>
    }

    return <div className="relative flex flex-col border-8 border-[#EB2F5B] p-4">
        <Typography className="line" variant="h1" fontFamily="ArialBlack" color="text-[#332f2f]">{text}</Typography>
        <div className="absolute border-[12px] bottom-[-28px] left-[40px] border-transparent border-l-[#EB2F5B] w-[0px] h-[0px] border-t-[#EB2F5B]"></div>
        </div>
}

export default Quote