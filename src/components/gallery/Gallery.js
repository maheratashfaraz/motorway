import React, { useState } from 'react';
import './Gallery.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
                <img alt='' src={temoImgSrc} />
                <button class="close" onClick={() => setModel(false)} />
            </div>
            <div class="gallery">
                {images && images.map(img => {
                    return (
                        <div class="pics" key={img.id}>
                            <LazyLoadImage effect='blur' src={`${img.url}.jpg`} alt='' width="100%" onClick={() => getImg(`${img.url}.jpg`)} />
                            <LazyLoadImage effect='blur' src={`${img.user.profile_image}.webp`} alt='' width="100%" onClick={() => getImg(`${img.user.profile_image}.webp`)} />
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Gallery;
