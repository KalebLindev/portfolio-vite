import { useNavigate } from "react-router"

const ProjectCard = ({img, title, text , projectLink = null}) => {

    const navigate = useNavigate()

    const handleClick = () => {
        console.log(projectLink)
        return window.open(projectLink)
    }

    return (
            <div className="project-card">
                <img src={img} onClick={handleClick}/>
                <div className="project-info">
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
    )
}

export default ProjectCard