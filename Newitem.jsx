import React from "react";

function Newitem(){
    return(
        <form class="item" action="/" method="post">
            <input type="text" name="newItem" placeholder="New Item" autocomplete="off"/>
            <button type="submit" name="list">+</button>
          </form>
    );
}

export default Newitem;