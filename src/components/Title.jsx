import React from "react";

function Title(props){
    return(
        <div class="box" id="heading">
            <h1> {props.listTitle} </h1>
        </div>
    )
}

export default Title;