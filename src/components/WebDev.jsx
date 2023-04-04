import img1 from '../images/encounter/encounter-1.jpeg'
import ProjectCard from './ProjectCard'

const WebDev = () => {
    return (
        <div className="webdev-container" >
            <div className="webdev">
                <ProjectCard img={img1} title="NAME" text="Info on the project Info on the project Info on the project Info on the project Info on the project"/>
                <ProjectCard img={img1} title="NAME" text="Info on the project Info on the project Info on the project Info on the project Info on the project"/>
                <ProjectCard img={img1} title="NAME" text="Info on the project Info on the project Info on the project Info on the project Info on the project"/>
            </div>
        </div>
    )
}

export default WebDev