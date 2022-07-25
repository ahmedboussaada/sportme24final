import db from "../../firebase";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./volley.css"
import { useNavigate } from "react-router-dom"

function Volleyball() {
  var [art, setarticle] = useState([]);
  useEffect(() => {
    db.collection("article").onSnapshot((data) => {
      setarticle(data.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, [art]);
  let navigate = useNavigate(); 
  function redirect(article){
   console.log(article)
   localStorage.setItem("onArticle" , JSON.stringify(article))
   navigate("/onearticle")
  }

  
    return art.map((e) => {
        if (e.data.tag === "volleyball") {
      return (
<Card className="bg-dark text-white itemss" onClick={()=>{redirect(e.data)}}>
<Card.Img src={e.data.url} alt="Card image" className="itemssimg" />
<Card.ImgOverlay>
  <Card.Title>{e.data.title}</Card.Title>
  <Card.Text>
  {e.data.text.slice(0,30)}
  </Card.Text>
  <Card.Text>{e.data.tag}</Card.Text>
</Card.ImgOverlay>
</Card>
      ) }
    });
  }

export default Volleyball;
