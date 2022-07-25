import "./article3.css"
import db from "../../firebase";
import {useEffect,useState} from "react"
import { useNavigate } from "react-router-dom"
function Article3(){
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
        if (e.data.tag === "tennis") {

           
        return (
            
    <div className="CardArticle3" onClick={()=>{redirect(e.data)}}>
     <img  src={e.data.url}/>
    <h5 > {e.data.title.slice(0,30)}</h5>
    <p > {e.data.description.slice(0,40)}</p>
</div>
    )}
    }))
}


export default Article3