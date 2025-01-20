import React, { useState } from 'react'


const ImgSlider = ({image}) => {
    const [index, setIndex] = useState(0)
    const img=image
    console.log(img[index])
    return (
        <>
            <div className='relative flex flex-row justify-between items-center rounded-xl'>

                <img src={img[index]} className='rounded-xl border-b-2 border-slate-400 '/>
                <button onClick={() => {
                    if (index === 0) {
                        setIndex(img.length - 1)
                    }
                    else {
                        setIndex(index - 1)
                    }
                }}
                    className='absolute left-0 text-blue-400 text-2xl'
                >❮</button>
                <button onClick={() => {
                    if (index === img.length - 1) {
                        setIndex(0)
                    }
                    else {
                        setIndex(index + 1)
                    }
                }}
                className='absolute right-0 text-blue-400 text-2xl'
                >❯</button>
              
            </div>

        </>
    )
}

export default ImgSlider