
import React, { useEffect, useState } from "react";
import OrderBook from './components/orderbook'

function App() {
  const [data, setData] = useState([
    {
      "Asks": [
        {
          "side": "sell",
          "quantity": "0.03408941",
          "price": "701758",
          "currencyPair": "BTCZAR",
          "orderCount": 1
        },
        {
          "side": "sell",
          "quantity": "0.11310969",
          "price": "701768",
          "currencyPair": "BTCZAR",
          "orderCount": 1
        },
        {
          "side": "sell",
          "quantity": "0.01137063",
          "price": "702863",
          "currencyPair": "BTCZAR",
          "orderCount": 1
        },
      ],
      "Bids": [
        {
          "side": "buy",
          "quantity": "0.05421785",
          "price": "701562",
          "currencyPair": "BTCZAR",
          "orderCount": 1
        },
        {
          "side": "buy",
          "quantity": "0.56991678",
          "price": "701155",
          "currencyPair": "BTCZAR",
          "orderCount": 1
        },
        {
          "side": "buy",
          "quantity": "0.07157",
          "price": "701041",
          "currencyPair": "BTCZAR",
          "orderCount": 1
        }
      ],
      "LastChange": "2022-02-08T08:16:59.816Z",
      "SequenceNumber": 311475880
    }
  ]);

  // need to use my api key to do this properly and avoid CORS issues
  
  const getOrderBookRequest = async () => {

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
  };

  useEffect(() => {
    getOrderBookRequest();
  }, []);
  
  return (
    <div>
      <OrderBook data={data} />
    </div>
  );
}

export default App;