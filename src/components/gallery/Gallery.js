import React, { useState } from 'react';
import './Gallery.css'

const Gallery = (props) => {
    const { images } = props
    const [model, setModel] = useState(false);
    const [temoImgSrc, setTempImgSrc] = useState('')

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc)
        setModel(true)
    }


    return (
        <>
            <div class={model ? "model open" : "model"}>
                <img src={temoImgSrc} />
                <button class="close" onClick={() => setModel(false)} />
            </div>
            <div class="gallery">
                {images && images.map(img => {
                    return (
                        <div class="pics" key={img.id}>
                            <img src={`${img.url}.jpg`} alt='' style={{ width: '100%' }} onClick={() => getImg(`${img.url}.jpg`)} />
                            <img src={`${img.user.profile_image}.webp`} alt='' style={{ width: '100%' }} onClick={() => getImg(`${img.user.profile_image}.webp`)} />
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Gallery;
