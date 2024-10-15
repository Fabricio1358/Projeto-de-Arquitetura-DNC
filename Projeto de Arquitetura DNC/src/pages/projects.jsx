import Banner from "../components/Banner/Banner"
import Footer from "../components/Footer/Footer"
import ProjectsList from "../components/ProjectsList/ProjectsList"
import Header from "../components/header/Header"
import { useContext } from "react"

// Context
import { AppContext } from '../contexts/appContext'

function Projects() {
    const appContext = useContext(AppContext)
    return (
        <>
            <Header/>
            <Banner title={appContext.languages[appContext.language].menu.projects} image="projects.jpg" />
            <div className="container">
                <ProjectsList/>
            </div>
            <Footer/>
        </>
    )
}

export default Projects