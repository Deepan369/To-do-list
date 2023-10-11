import React from "react";
import Title from "./Title";
import Forms from "./Forms";
import Newitem from "./Newitem";
import "./index.css";

function App(){
    return (
        <div>
        <Title listTitle="Today"/>
    
      <div class="box">
          <Forms/>
          <Newitem/>  
      </div>
        </div>
    );
}

export default App;