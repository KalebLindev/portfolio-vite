import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

const ImgSlider = ({others = null, length}) => {
    const rest = others    
    let currentPos = 0
    //^ Max the max right clicks of the slider
    const maxMoves = 123.5 * (length - 5)

    const moveSliderRight = (e) => {
        const slider = e.target.parentNode.querySelector('.img-slider')
        const addingPos = 123.5
        if(currentPos >= maxMoves) {
            currentPos = 0
        } else {
            currentPos = currentPos + addingPos
        }
        try {
            slider.style.right = `${currentPos}px`
        } catch (err) {
            console.log('Try clicking the arrow again')
        }
        // console.log(slider.style.right)
    }

    const moveSliderLeft = (e) => {
        const slider = e.target.parentNode.querySelector('.img-slider')
        const addingPos = 123.5
        if(currentPos <= 0) {
            currentPos = maxMoves
        } else {
            currentPos = currentPos - addingPos
        }
        try {
            slider.style.right = `${currentPos}px`
        } catch (err) {
            console.log('Try clicking the arrow again')
        }
        // console.log(slider.style.right)
    }

    const changeMainImgSrc = (e) => {
        // console.log(e.target)
        const targetForFunc = e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.main-show-image')
        // console.log(targetForFunc)
        targetForFunc.src = e.target.src
        // console.log(targetForFunc)
    }


    return (
        <div className="slider-flex-container">
            {length > 5 ? <BiLeftArrow className='left-arrow' onClick={moveSliderLeft}/> : null}
            <div className="slider-width">
                <div className="img-slider">
                    {/* {rest ? console.log(rest[0]) : null} */}
                    {rest ? rest.map((img, index) => {
                        return <img src={img} key={index} onClick={changeMainImgSrc}/>
                    }) : null}
                </div>
            </div>
            {length > 5 ? <BiRightArrow className='right-arrow' onClick={moveSliderRight}/> : null}
            
        </div>
    )
}

export default ImgSlider