import "./admin.css";
import { useNavigate } from "react-router-dom";
import db from "../firebase";
import { useEffect, useState } from "react";
import Addarticle from "./addarticle";


function Admin() {
  let navigate = useNavigate();
  var [art, setarticle] = useState([]);
  var [updateForm, setupdateForm] = useState(false);
  var [title, settitleArticle] = useState("");
  var [old, setold] = useState({});
  var [description, setdescArticle] = useState("");
  var [text, settextArticle] = useState("");
  var [idd, setid] = useState("");
  function disc() {
    navigate("/admin");
  }
  useEffect(() => {
    db.collection("article").onSnapshot((data) => {
      setarticle(data.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
      // console.log(art);
    });
  }, [art]);
  function Del(id){
    db.collection("article").doc(id).delete().then(()=>{alert("deleted")})
  }
  function confirmupdate(){
    console.log(idd)
    db.collection("article").doc(idd).set({title , description , text , url : old.url  , tag : old.tag}).then(()=> {alert(" updated");
    setupdateForm(false)

  });
  }
 
 function openupdateForm(item , i){
  setold(item)
  settitleArticle(item.title)
  setdescArticle(item.description)
  settextArticle(item.text)
  setid(i)
    setupdateForm(true)
  }

  return (
    <div><div className="discstyle"><i className="fa-solid fa-arrow-right-from-bracket " onClick={() => {
      disc();
    }}>Disconnect</i> </div>
          
       
      {updateForm ? <div>
        <input value={title} onChange={(e)=>{settitleArticle(e.target.value)}}/>
        <input value={description} onChange={(e)=>{setdescArticle(e.target.value)}}/>
        <input value={text} onChange={(e)=>{settextArticle(e.target.value)}}/>
        <button onClick={()=>{confirmupdate()}}>confirm</button>
        <button onClick={()=>{setupdateForm(false)}}>cancel</button>
      </div> : <div>{art.slice(0,8).map((e)=>{
        return ( <ul className="liste">
            <li className="item1">{e.data.title.slice(0,80)}</li>
            <li className="item2">{e.data.description.slice(0,80)}</li>
            <li className="item3">{e.data.text.slice(0,80)}</li>
            <li className="item4">{e.data.tag}</li>
            <li className="item5"><img src={e.data.url}/></li>
            <button className="item6" onClick={()=>{openupdateForm(e.data , e.id)}}>update</button>
            <button className="item7" onClick={() => {Del(e.id);}}>delete</button>
            </ul>)
      })}
      <div><Addarticle/></div>
      </div>}
            
        
    </div>
  );
}

export default Admin;


