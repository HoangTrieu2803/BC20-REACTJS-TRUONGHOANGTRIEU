import React from "react"
import Header from "./header";
import Carousel from "./carousel";
import ListSmartPhone from "./listsmartphone";
import Footer from "./footer";
export default function Baitap(){
    return(
      <div className="bg-dark container-fluid">
        <Header/>
        <Carousel/>
        <ListSmartPhone/>
        <Footer/>
      </div>
    );
}