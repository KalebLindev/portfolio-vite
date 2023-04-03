const ProjectCard = ({img, title, text}) => {
    return (
        <div className="webdev">
            <div className="project-card">
                <img src={img}/>
                <div className="project-info">
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard