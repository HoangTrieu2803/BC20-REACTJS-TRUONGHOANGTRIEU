import React from "react";
import SmartPhone from "./smartphone";
export default function ListSmartPhone(){
    return(
        <div>
            <h1 class="text-white text-center" color="black">BEST SMARTPHONE</h1>
        <div className ="row">
            <SmartPhone/>
            <SmartPhone/>
            <SmartPhone/>
            <SmartPhone/>
        </div>
        </div>
    );
}