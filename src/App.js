import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';
function App() {

  const [item,setitem] = useState(true)

  const [data,setData]= useState([])

  // const onChange = () =>{
  //   getDets (Inputgame)
  // }


  // const getDets = (Gamedetails) => {
  //   if (!Gamedetails) return

  //   const apiURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  //   axios.get(apiURL).then((res) => {
  //     console.log("response",res.data)
  //   }).catch((err) => {
  //     console.log("error",err)
  //   })
  // }
  useEffect (() => {
    (async() => {
      try{
        const res= await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        // .then((res) => {
          setData(res.data)
           console.log(res.data)
        // })
      }catch(err){
        console.log(err.data)
      }
    }) ()
  },[])
  return (
    <div className="App">
      <div className="top"> 
       <div className="left">
          <button className="home">HOME</button>
          <button className="about">ABOUT</button>
          <button className="contact">CONTACT US</button>
        </div>
        <div className="right">
          <input placeholder="Search..."/>
          <button className="search">SEARCH</button>
        </div>
      </div>
      <div className="homepg">
        <h1>Invest in Future</h1>
      </div>
      <div className="cr">
        {/* <div className="itemcontent">
          <div className="items">
            <h3 className="hd3"></h3>
          </div>
        </div> */}
      </div>
      <div className="itemcontainer">
        {data.slice(0,item ? 12 : data.length).map((item) => {
          return<div className="container">
            <p className="itemnames">{item.name} </p>
            <img src={item.image} width = {100} height = {100}/>
            <p>All time high:{item.ath} </p>
            <p style={item.ath > item.current_price ? {color: "red"}: {color: "green"}}>Current Price: {item.current_price}</p>
          </div>
        })}
      </div>
      <div className="btn">
        <button className="butn" onClick={()=>{setitem(!item)}} >{item ? "Load more" : "Show less"}</button>
      </div>
    </div>
  );
}

export default App;
