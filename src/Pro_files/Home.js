import NavBar from "./NavBar"
import Header from "./Header"
import Skill from "./Skill"
import MyWork from "./MyWork"
import Blog from "./Blog"
import Footer from "./Footer"

function Home(){
    return(
        <div>
            <NavBar />
            <Header />
            <Skill/>
            <MyWork/>
            <Blog/>
            <Footer/>
            {/*About me
            Projects
            Contact me
            Footer */}
        </div>
    )
}

export default Home