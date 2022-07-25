import "./navbar.css"
import Navicons from "../../compon/navsicons"
function Navbar () {
    return (
      <div className="containerNavbar">
          <ul className="navbar">
            <li><a href="home" className="av">Home</a></li>
            <li><a href="football" className="av">Football</a></li>
            <li><a href="tennis" className="av">Tennis</a></li>
            <li><a href="basket" className="av">Baskett</a></li>
            <li><a href="handball" className="av">Handball</a></li>
            <li><a href="volleyball" className="av">Volleyball</a></li>
            <li><a href="others" className="av">Others</a></li>

          </ul>
          <div className="navicons">
          <Navicons/>
          </div>
          </div>
     
        
    )
}



export default Navbar