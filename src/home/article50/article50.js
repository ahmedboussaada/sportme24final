import "./article50.css"
import db from "../../firebase";
import {useEffect,useState} from "react"
import { useNavigate } from "react-router-dom"


function Article50(){
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
    return (art.slice(0,3).map((e)=>{
        
        return (
           
            <div class="card remake50" onClick={()=>{redirect(e.data)}}>
  <img class="card-img-top img50" src={e.data.url} alt="Card image cap"/>
    <h5 class="card-title">{e.data.title}</h5>
    <p class="card-text">{e.data.description.slice(0,40)}</p>
</div>

    )
    }))
}


export default Article50