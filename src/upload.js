import { useState,useEffect } from "react";
import firebase from "firebase";
import db from "./firebase";
function Upload() {
  var [img, setImg] = useState("");
  var [imageliste,setimageListe]=useState([]);
  var [loader, setLoader] = useState(false);
  var [title, settitle] = useState("");
  var [description, setdescription] = useState("");

   useEffect(()=>{
    db.collection("article").onSnapshot((data)=>{
        setimageListe(data.docs.map((doc)=>({id:doc.id ,data :doc.data()})))
        // console.log(art);

    }); 

},[imageliste]);
  function handelChange(e) {
    console.log(e.target.files[0]);
    if (e.target.files[0]) {
      setImg(e.target.files[0]);
    }
  }
  function Del (id){
    db.collection("article").doc(id).delete().then(()=>{alert("deleted");
  });
  }
  function Confirm() {
    setLoader(true)
    var uploadTask = firebase
      .storage()
      .ref()
      .child("imagesArticle/" + img.name)
      .put(img);
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {},
      (error) => {
        throw error;
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          db.collection("article").add({url: url , title : title , description : description}).then (()=>setLoader(false));
          console.log(url);
        });
      }
    );
  }
  return (
    <div>
      {loader ? (      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRpJzeMThas2eRIThuGDRmdzzc23NRXTnlVA&usqp=CAU"/>
) : <div>
  <input placeholder="title" onChange={(e)=>{settitle(e.target.value)}}/>
  <input placeholder="title" onChange={(e)=>{setdescription(e.target.value)}}/>
 
  <input
        type="file"
        onChange={(e) => {
          handelChange(e);
        }}
      />
      <button
        onClick={() => {
          Confirm();
        }}
      >
        upload
      </button>{" "}
     { imageliste.map((e)=>{
      return (<div><img src={e.data.url} /><button onClick={()=>{Del(e.id)}}>delete</button></div>
       )})}
</div> }
      
    </div>
  );
}

export default Upload;
