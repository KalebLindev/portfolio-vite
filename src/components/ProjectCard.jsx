const ProjectCard = ({img, title, text}) => {

    const handleClick = () => {
        alert('Title: ' + title)
    }

    return (
            <div className="project-card" onClick={handleClick}>
                <img src={img}/>
                <div className="project-info">
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
    )
}

export default ProjectCard