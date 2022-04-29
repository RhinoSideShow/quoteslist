import React from "react";
import list from "./quotes.json";

function RandomInt(max){
    return Math.floor(Math.random()*max);

}

export default function RandomQuote(){
    let indx = RandomInt(list.length)
    return(
        <div> 
            <p>{list[indx].quote} </p>- {list[indx].author}
        </div>
    );
}