import NavBar from "./NavBar"
import Header from "./Header"
import Skill from "./Skill"
function Home(){
    return(
        <div>
            <NavBar />
            <Header />
            <Skill/>
            {/*About me
            Projects
            Contact me
            Footer */}
        </div>
    )
}

export default Home