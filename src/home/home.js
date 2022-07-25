import "./home.css"
import GetArticle from "./slider/slider"
import Article1 from "./article1/article1"
import Article2 from "./article2/article2"
import Article50 from "./article50/article50"
import Bannerta7t from "./bannerta7tslider/bannerta7t"
import Banner from "./banners/banner"
import Weather from "./weather/weather"
import Otherbanner from "./banners/otherbanner"
import Article3 from "./article3/article3"
import LongBanner from "./banners/longbanner"
import Karriery from "./banners/bannerdouble"
import FirstBanner from "./banners/lastfile"
function Home (){
    return (<div className="containerHome">
        <div className="Slider"><GetArticle/></div>
        <div className="Banner"><Banner/></div>
        <div className="otherBanner"><FirstBanner/></div>
        <div className="doublebanner"><Karriery/> </div>
        <div className="ta7tsliderbanner"><Bannerta7t/> </div>
        <div className="weather"><Weather/> </div>
        <div className="articletype1"><Article1/> </div>
        <div className="articletype2"><Article2/></div>
        <div className="article50"><Article50/></div>
        <div className="longbanner"><LongBanner/></div>
        <div className="articletype3"> <p className="article3item1">Tennis News</p><Article3/></div>
    </div>)
}

export default Home