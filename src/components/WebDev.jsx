import ProjectCard from './ProjectCard'
import countryAPIImg from '../images/projectLandingPages/femcountryapi.png'
import redditCloneImg from '../images/projectLandingPages/redditclone.png'

const WebDev = () => {
    return (
        <div className="webdev-container" >
            <div className="webdev">
                <ProjectCard img={countryAPIImg} title="Country API" text="Search and filter countries" projectLink="https://femcountry.netlify.app/"/>
                <ProjectCard img={redditCloneImg} title="Reddit API" text="search and filter the top 25 SubReddits real time" projectLink="https://reddit-clone-v1.netlify.app/"/>
                <ProjectCard img={countryAPIImg} title="NAME" text="Info on the project"/>
            </div>
        </div>
    )
}

export default WebDev