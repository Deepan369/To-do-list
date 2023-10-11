import React from "react";
import Items from "./Items.jsx";

function Forms(){
    return(
        <form class="" action="/delete" method="post">
            <Items task="Read Books"/>
            <Items task="Play Well"/>
            <Items task="Sleep well"/>
        </form>
    )
}

export default Forms;