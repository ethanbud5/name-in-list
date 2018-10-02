import React from "react";

function Child(props){
        return(
            <div>
                <input name="input" type="text" onChange={(e)=>props.searchNames(e)}/>
                <p>Mentors: {props.listArray.join(", ")}</p>
                <p>User Input is in the list of names: {props.hasName?"true":"false"}</p>
            </div>
            
        )
}

export default Child