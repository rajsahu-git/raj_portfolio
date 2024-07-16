import NavBar from "./NavBar"
import Header from "./Header"
import Skill from "./Skill"
import My_work from "./My_work"


function Home(){
    return(
        <div>
            <NavBar />
            <Header />
            <Skill/>
            <My_work/>
            {/*About me
            Projects
            Contact me
            Footer */}
        </div>
    )
}

export default Home