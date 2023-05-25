import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import NasaPhoto from "./Components/NasaPhoto";

function App() {
  const [data, setData] = useState(dummyData);

  // useEffect(() => {
  //   axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  //     .then(res => {
  //       console.log(res.data)
  //      })
  //       .catch((err => console.log(err)))
  // }, [])
  
  return (
    <div className="App">
      <NasaPhoto data={data}/>
    </div>
  );
}

export default App;