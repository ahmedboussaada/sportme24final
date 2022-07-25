import { useState } from "react";
import { useNavigate } from "react-router-dom"
import "./login.css"
 function Login() {
    const [user,setUser]  = useState("")
    const [pwd,setPassword]  = useState("")

    let navigate = useNavigate(); 
    function loginadmin(){
        if (pwd==="12345678" && user ==="ahmed123"){
            navigate("/adminside");
        } else {
            alert("login failed")
        }
    }
  return (
    <div className="logincontainer" >
      <h1>Sign In </h1>
      <form >
        <label htmlFor="username">User</label>
        <input
          type="text"
          id="username"
          onChange={(event)=>{setUser(event.target.value)}}
        
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(event)=>{setPassword(event.target.value)}}
         
        />
      </form>
      <button onClick={()=>{loginadmin()}}>
        Sign In
        
      </button>
    </div>

    // <BrowserRouter>
    //     <Routes>
    //         <Route path="/admin" element={<Admin/>} />
    //     </Routes>
    //   </BrowserRouter>
  );
} 

export default Login;
