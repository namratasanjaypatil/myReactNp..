// import { Product1, Product2} from "./Product"

import { useState } from "react";

function App2() {

  // useState is a function which will return an Array..

  // 1 -> initialValue.
  // 2 -> function this function will change the initialValue

  const [userName, setUserName] = useState("Namrata");
  const [number, setNumber] = useState(0);
  const [hideImage, setHideImage] = useState(false)

  return (
    <div className="container">
      <h2> Boolean </h2>
      <button onClick={() => setHideImage(true)}> Hide </button>

      <button onClick={() => setHideImage(false)}> Show </button>

              {/* task uncomplete */}
      {/* <button onClick={()  => setHideImage(true, false)}> Hide / Show </button> */}
      <br/>
      <br/>
      {
        hideImage ? null : <img src="https://images.pexels.com/photos/3935572/pexels-photo-3935572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={300}/>
      }
      
      <hr/>
      <h2> Working with Number </h2>
      <h1> {number} </h1>
      <button onClick={() => setNumber(number + 1)}> + </button>
    
      <button onClick={() => setNumber(number - 1)}> - </button>
      <hr />

      <h2> Working with String </h2>
      <h1> My name is {userName} </h1>
      <button onClick={() => setUserName("Pooja")}> Change </button>

      {/* <Product1 /> */}
      {/* <Product2 /> */}
    </div>
  )
}

export default App2;
