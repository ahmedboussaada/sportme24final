import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./admin/login";
import Header from "./home/header/header";
import Navbar from "./home/navbar/navbar";
import Home from "./home/home";
import Upload from "./upload";
import Admin from "./admin/admin";
import Footer from "./footer/footer";
import Article from "./admin/article";
import Football from "./sports/football/football";
import Handball from "./sports/handball/handball";
import Volleyball from "./sports/volleyball/volley";
import Basketball from "./sports/basketball/basket";
import Others from "./sports/others/others";
import Tennis from "./sports/tennis/tennis";
function App() {
  return (
    <div className="appgrid appbackground">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Navbar />
                <div className="homeseperation">
                <Home />
                </div>
                <Footer />
              </div>
            }
          ></Route>
          <Route
            path="/admin"
            element={
              <h1>
                <Login />
              </h1>
            }
          />
           <Route
            path="/onearticle"
            element={ 
              <div>  <Header />
              <Navbar />
          <Article />
          <Footer /></div>
            

          }
          />
          <Route
            path="/adminside"
            element={
              <h1>
                <Admin />
              </h1>
            }
          />
          <Route
            path="/home"
            element={
              <h1>
                <Header />
                <Navbar />
                <Home />
                <Footer />

              </h1>
            }
          />
          <Route
            path="/football"
            element={
              <h1>
                
                <Header />
                <Navbar />
                <div className="containersports">
                <Football className="containersports"/></div>
                <Footer />
              </h1>
            }
          />
          <Route
            path="/handball"
            element={
              <h1>
                
                <Header />
                <Navbar />
                <div className="containersports">
                <Handball /></div>
                <Footer />
              </h1>
            }
          />
          <Route
            path="/volleyball"
            element={
              <h1>
                
                <Header />
                <Navbar />
                <div className="containersports">
                <Volleyball /></div>
                <Footer />
              </h1>
            }
          />
          <Route
            path="/basket"
            element={
              <h1>
                
                <Header />
                <Navbar />
                <div className="containersports">

                <Basketball /></div>
                <Footer />
              </h1>
            }
          />
          <Route
            path="/tennis"
            element={
              <div>
                
                <Header />
                <Navbar />
                <div className="containersports">
                <Tennis/>
                </div>
                <Footer />
                </div>
            }
          />
          <Route
            path="/others"
            element={
              <h1>
                
                <Header />
                <Navbar />
                <div className="containersports">
                <Others /></div>
                <Footer />
              </h1>
            }
          />
        </Routes>
        
        
      </BrowserRouter>
      {/* <Article/> */}
    </div>
  );
}

export default App;
