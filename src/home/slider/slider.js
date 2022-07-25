import Carousel from 'react-bootstrap/Carousel';
import db from '../../firebase';
import {useEffect,useState} from "react"
import "./slider.css"
import { useNavigate } from "react-router-dom"




    
  function GetArticle(){
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

    return ( <Carousel>
        {art.slice(0,3).map((e)=>{
          return (<Carousel.Item onClick={()=>{redirect(e.data)}}>
            <img
              className="d-block imgslider "
              src={e.data.url}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{e.data.title}</h3>
              <p>{e.data.tag}</p>
            </Carousel.Caption>
          </Carousel.Item>)
          
        })}
      </Carousel>)
 
}
  



export default GetArticle 