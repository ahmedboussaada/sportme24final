import "./article.css"
import db from "../firebase";
import {useEffect,useState} from "react"

function Article(){
    
        var [article,setarticle]=useState([])
        useEffect(()=>{
        
            setarticle(JSON.parse(localStorage.getItem("onArticle")))
        },[]);
    
            
            return (<div className="articleContainer">
                <marquee>{article.title} : {article.text}</marquee>
                <img src={article.url}  className="imgsize"/>
                <h3 className="titlearticle">{article.title}</h3>
                <p className="textarticle">{article.text}</p>
                <p className="textarticle">{article.tag}</p>
            </div>)
    }

    export default Article
    
