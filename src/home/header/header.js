import "./header.css"
import Logo from "../../compon/logo"
function Header(){
    return (<div className="headerContainer">
        <div className="logoHeader"><Logo/></div>
        <div className="bannerHeader"><img src="./../../img/banner1.gif"/></div>
    </div>)
}


export default Header