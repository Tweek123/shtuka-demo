const Avatar = ({src}: {src:string}) => {
    return (
    <div className="w-48 h-48 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden shadow-lg m-4 border-8 border-[#FEFEFE]">
  <img src={src} />
</div>)
}

export default Avatar