import React from "react";

function Items(props){
    return(
        <div class="item">
              <input type="checkbox" name="checkbox"  value="<%= item._id %>" onchange="this.form.submit()"/>
              <p> {props.task} </p>
        </div>
    );
}

export default Items;