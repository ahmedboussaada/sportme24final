import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import firebase from "firebase";
import db from "../firebase";
import "./addarticle.css"
function Addarticle() {
  var [img, setImg] = useState("");
  var [title, settitleArticle] = useState("");
  var [description, setdescArticle] = useState("");
  var [text, settextArticle] = useState("");
  var [tag, settagArticle] = useState("");

//   let navigate = useNavigate();
//   function disc() {
//     navigate("/adminside");
//   }


  function handelChange(e) {
    console.log(e.target.files[0]);
    if (e.target.files[0]) {
      setImg(e.target.files[0]);
    }
  }

  function Confirm() {
    // setLoader(true)
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
          db.collection("article")
            .add({ 
                title: title,
                description: description,
                text: text,
                tag: tag,
                url: url,
             })
            .then(() => alert("uploded"));
          console.log(url);
        });
      }
    );
  }
  return (
    <div className="addContainer">
      <h1 className="titleadd">Add Article</h1>
      <label id="title" >Add a Title Title</label>
      <input
        className="inputadd"
        type="text"
        id="title"
        onChange={(e) => {
          settitleArticle(e.target.value);
        }}
      />
      <label id="description">Add a Description to your Article</label>
      <input
       className="inputadd"
        type="text"
        id="description"
        onChange={(e) => {
          setdescArticle(e.target.value);
        }}
      />
      <label id="text">Add Text Here</label>
      <input
       className="inputadd"
        type="text"
        id="text"
        onChange={(e) => {
          settextArticle(e.target.value);
        }}
      />
      <label id="tag">Add a Tag for your Article</label>
      <input
       className="inputadd"
        type="text"
        id="tag"
        onChange={(e) => {
          settagArticle(e.target.value);
        }}
      />
      <label>Add Image </label>
      <input
      className="btnaddarticle"
        type="file"
        onChange={(e) => {
          handelChange(e);
        }}
      />
      <button
      className="btnaddarticle"
        onClick={() => {
          Confirm();
        }}
      >
        confirm
      </button>{" "}
  
      {/* <button onClick={()=>{disc()}}>return to adminside </button> */}
    </div>
  );
}

export default Addarticle;
