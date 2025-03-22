const Video = ({src}: {src: string}) => {
    return <div className="flex flex-col aspect-square">
    <iframe width="100%" height="100%" src={src} frameBorder="0" allow="clipboard-write; autoplay" allowFullScreen></iframe>
    </div>
}

export default Video