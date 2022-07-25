import axios from "axios";
import {useEffect, useState} from "react"

function Otherbanner (){
    const API_KEY = 'bfdc31721454377b6478aff801ffce22199acfb297c339631de4505f2dd00e2e';
    const leagueId="207";    
    const [tm , setTeam]= useState([]); //hedhi chnia ? mafhémtéch chnia nista3mlha ,? 
    function display(){
        axios.get(`https://apiv2.allsportsapi.com/football/?met=Standings&leagueId=${leagueId}&APIkey=${API_KEY}`).then((res)=>{
            setTeam(res.data.result.total) 
            // console.log("dazdazda",res.data.result.total)
    })}
useEffect(()=>{
    display()           // activite the function direct , without calling it in button or anything , invoke the function from begining
},[tm])

    return (
        <div> 
           
        
            {tm.slice(0,10).map((e)=>{
                return (
                <div> 
                 
                    <table>
                <tr>
                  <td>{e?.standing_place}</td> 
                  <td>{e?.standing_team} </td>
                  <td>{e?.standing_P}</td>
                  <td>{e?.standing_W}</td>
                  <td>{e?.standing_D}</td>
                  <td>{e?.standing_L}</td>
                  <td>{e?.standing_PTS}</td>
                  </tr>
                  </table>
               
                </div>)
            })}
                                {/* <h1> {tm[0]?.standing_team}</h1> 
                                <div  >{tm[0]?.standing_place}</div> */}
                               
        </div>
    )
}

export default Otherbanner












