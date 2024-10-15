import { useContext } from "react"
import Banner from "../components/Banner/Banner"
import AboutText from "../components/AboutText/AboutText"
import Footer from "../components/Footer/Footer"
import Header from "../components/header/Header"

// Context
import { AppContext } from '../contexts/appContext'

function About() {
    const appContext = useContext(AppContext)
    return (
        <>
            <Header/>
            <Banner title={appContext.languages[appContext.language].menu.about} image="about.jpg" />
            <div className="container">
                <AboutText/>
            </div>
            <Footer/>
        </>
    )
}

export default About