import React, { useState,useEffect } from "react";
import "./table.css"
import Thead from "./Thead";
import Tbody from "./tbody";
import FilterInput from "./FilterInput";
function Mytbale({ products}){
 
    const [datas,setData]=useState(products)

    const [myinput,setInput]=useState("")
    
    useEffect(() => {
        setData( products);
        console.log(datas);
      },[ products]); 

    function ascending(){
      let sortedData=[...datas].sort((a,b)=>{
           return a.price-b.price
        })
        // console.log("sorted",sortedData)
        setData(sortedData)
    }

    function descending(){
        let sortedData=[...datas].sort((a,b)=>{
            return b.price-a.price
         })
        //  console.log("sorted",sortedData)
         setData(sortedData)
        
    }

    

    return (
        <>
          <div>
          
            <FilterInput myinput={myinput} setInput={setInput} setData={setData} datas={datas}/>
            
            <div className="btnBox">
              <button onClick={ascending} >price low to high</button>
              <button onClick={descending}>price high to low</button>
            </div>
            <table className="table" border={1} >
                <Thead/>
                
                <Tbody datas={datas}/>
                
            </table>
          </div>
        </>
    )
}
export default Mytbale
