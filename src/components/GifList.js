import React from 'react'

const GifList = ({pictures}) => {

    const imgs = pictures.map(pic => {
        return <img src={pic.images.original.url}></img>
    })

    return (
        <div>
            {imgs}
        </div>
    )
}

export default GifList