import ImgSlider from "./ImgSlider"

const ImageDisplay = ({img, title, company, ld, prog, cred, link, others}) => {
    const length = others ? others.length : null
    return (
        <div className="lighting-show-info">
            <div className="img-slider-wrapper">
                <img className='main-show-image' src={img}/>
                {/* //^Guard clause for the slider buttons */}
                {others ? <ImgSlider others={others} length={length}/> : null}
                    
            </div>
            <div className="lighting-show-text">
                {title ? <h2>{title}</h2> : null}
                {company ? <h3>{company}</h3> : null}
                {ld ? <p>Lighting Designer - {ld}</p> : null}
                {prog ? <p>Programmer - {prog}</p> : null}
                {cred ? <p>Photos - {cred}</p> : null}
                {link ? <a href={link}>Paperwork</a> : null}
            </div>
        </div>
    )
}

export default ImageDisplay