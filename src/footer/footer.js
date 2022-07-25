import "./footer.css"
import Navicons from "../compon/navsicons"
import Logo from "../compon/logo"
function Footer (){
    return (<div className="footercontainer">
      <div className="topfooter">  <Navicons className="iconsfooter" /><div className="logofooter"><Logo/></div></div>
        <div className="copyrightfooter">Sportme24, 2022. All rights reserved &copy;.</div>
        
    </div>)
}

export default Footer