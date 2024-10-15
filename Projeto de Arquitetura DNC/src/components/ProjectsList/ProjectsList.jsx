import { useContext, useState, useEffect } from 'react'
import './ProjectsList.css'

// ASSETS
import LikedFilled from '../../assets/like.svg'
import LikeOutline from '../../assets/noLike.svg'

// Components
import Button from '../Button/Button'

// UTILS
import { getApiData } from '../../services/apiServices'

// Context
import { AppContext } from '../../contexts/appContext'

function ProjectsList() {
    const [projects, setProjects] = useState([])
    const [favProjects, setFavProject] = useState([])
    const appContext = useContext(AppContext)
    const handleSavedProjects = (id) => {
        setFavProject((prevFavProjects) => {
            if (prevFavProjects.includes(id)) {
                const filterArray = prevFavProjects.filter((projectId) => projectId !== id)
                sessionStorage.setItem('favProjects', JSON.stringify(filterArray))
                return prevFavProjects.filter((projectId) => projectId !== id)
            } else {
                sessionStorage.setItem('favProjects', JSON.stringify([...prevFavProjects, id]))
                return [...prevFavProjects, id]
            }
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectsResponse = await getApiData('projects');
                setProjects(projectsResponse);
            } catch (error) {
                console.error('Fetch error:', error);
                setProjects([]); // ou adicione uma mensagem de erro no estado
            }
        };
    
        fetchData();
    }, [])

    useEffect(() => {
        const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects'))
        if (savedFavProjects) {
            setFavProject(savedFavProjects)
        }
    }, [])

    return (
        <div className='projects-section'>
            <div className='projects-hero'>
                <h2>{appContext.languages[appContext.language].projects.title}</h2>
                <p>{appContext.languages[appContext.language].projects.subtitle}</p>
            </div>
            <div className='projects-grid'>
                {
                    projects ?
                        projects.length > 0 ? (
                            projects.map((project) => (
                                <div className='projects-card d-flex jc-center al-center fd-column' key={project.id}>
                                    <div 
                                        className='thumb tertiary-background' 
                                        style={{backgroundImage: `url(${project.thumb})`}}
                                    ></div>
                                    <h3>{project.title}</h3>
                                    <p>{project.subtitle}</p>
                                    <Button className='button-unstyled' onClick={() => handleSavedProjects(project.id)}>
                                        <img src={favProjects.includes(project.id) ? LikedFilled : LikeOutline} alt="Like" height="20px"/>
                                    </Button>
                                </div>
                            )) 
                        ) : (
                            <p>No projects available</p>
                        )
                    : null
                }

            </div>
        </div>
    )
}

export default ProjectsList