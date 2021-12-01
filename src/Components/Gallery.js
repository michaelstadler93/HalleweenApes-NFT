import React, { useEffect, useState } from 'react';

function Gallery() {
    const [pos, setPos] = useState(0)
    const [openseaLink, setOpenseaLink] = useState("")
    const [openseaUrl, setOpenseaUrl] = useState("")

    useEffect(() => {
        setTimeout(() => {
            let next = pos - 1;
            setPos(next)
        }, 20);
    }, [pos])

    useEffect(() => {
        var date = new Date();
        if(date.getMonth() >= 11 && date.getDay() >= 1) {
            setOpenseaLink("VIEW ON OPENSEA");
            setOpenseaUrl("https://opensea.io");
        } else {
            setOpenseaLink("VIEW ON OPENSEA AFTER MINTING");
            setOpenseaUrl("");
        }
    }, [])

    return (
        <section>
            <div  id="gallery" style={{ backgroundPosition: pos }}></div>
            <div className="GallerySlide_background text-center">
                <div className="ViewGallery container"><a rel="noopener noreferrer" href={openseaUrl} target="_blank">{openseaLink}</a></div>
            </div>
        </section>
    )
    
}

export default Gallery;
