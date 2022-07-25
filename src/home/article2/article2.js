import db from "../../firebase";
import {useEffect,useState} from "react"
import "./article2.css"
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom"


function Article2(){
    var [art,setarticle]=useState([])
    useEffect(()=>{
        db.collection("article").onSnapshot((data)=>{
            setarticle(data.docs.map((doc)=>({id:doc.id ,data :doc.data()})))

        }); 
        setarticle(art.reverse())
    },[art]);
    let navigate = useNavigate(); 
    function redirect(article){
     console.log(article)
     localStorage.setItem("onArticle" , JSON.stringify(article))
     navigate("/onearticle")
    }
    return (art.sort(art.data).slice(0,3).map((e)=>{
        
        return (<Card className="bg-dark text-white article2box " onClick={()=>{redirect(e.data)}}>
        <Card.Img src={e.data.url} alt="Card image " />
        <Card.ImgOverlay>
          <Card.Title>{e.data.title}</Card.Title>
                <Card.Text className="tagstyle">{e.data.tag}</Card.Text>
        </Card.ImgOverlay>
      </Card>)
    }))
}


export default Article2