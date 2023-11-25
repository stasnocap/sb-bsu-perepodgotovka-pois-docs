export const PictureWithDescription = ({ imgSrc, description }: { imgSrc: string, description: string }) => {
    const imgAlt = imgSrc.substring(imgSrc.lastIndexOf("/") + 1)
    return (
        <div className="flex items-center mt-4">
            <img height="200" width="200" src={imgSrc} alt={imgAlt} />
            <span className="me-2">
                —
            </span>
            <span className="text-justify" dangerouslySetInnerHTML={{__html: description}}></span>
        </div>
    )
}