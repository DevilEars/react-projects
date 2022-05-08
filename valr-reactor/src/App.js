
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  // need to use my api key to do this properly and avoid CORS issues
  
  // const getOrderBookRequest = async () => {
  //   const url = `http://api.valr.com/v1/public/BTCZAR/orderbook`;

  //   try {
  //   const response = await fetch(url, {mode:'cors'});

  //   if(response){
  //     setData(response.json());
  //   }
  // }
  // catch (e) {
  //   console.log(e);
  // } 
  // };

  // useEffect(() => {
  //   getOrderBookRequest();
  // }, []);
  
  return (
    <div>
      <h2>can you lark to read me bruh?</h2>   
    </div>
  );
}

export default App;