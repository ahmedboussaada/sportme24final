import db from "../../firebase";
import {useEffect,useState} from "react"
import "./article1.css"
import { useNavigate } from "react-router-dom"
function Article1(){
    var [art,setarticle]=useState([])
    useEffect(()=>{
        db.collection("article").onSnapshot((data)=>{
            setarticle(data.docs.map((doc)=>({id:doc.id ,data :doc.data()})))
            // console.log(art);

        }); 

    },[art]);
    let navigate = useNavigate(); 
   function redirect(article){
    console.log(article)
    localStorage.setItem("onArticle" , JSON.stringify(article))
    navigate("/onearticle")
   }

    return (art.slice(0,4).map((e)=>{
        
        return (
    <a >
    <div class="card remake containerarticle1" onClick={()=>{redirect(e.data)}}>
    <img class="card-img-top" src={e.data.url} alt="Card image cap"/>
    <h5 class="card-title"><p> </p> {e.data.title.slice(0,30)}</h5>
    <p class="card-text tagstyle"><p> </p> {e.data.tag.slice(0,40)}</p>
</div></a>
    )
    }))
}


export default Article1