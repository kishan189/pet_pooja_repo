import React from 'react'
import "./table.css"
function FilterInput({myinput,setInput,datas,setData}) {

    function handleForm(e){
        e.preventDefault()
        console.log(datas)
       let res=datas.filter((el,i)=>{
         if(e.target.value==""){
          return datas
         }
         return el.title.toLowerCase().includes(myinput.toLowerCase())
       })
       setData(res)
       console.log("res",res)
       setInput("")
    }
  return (
    <div className='fromContainer'>
        <form onSubmit={(e)=>handleForm(e)}>
            <input type="text" value={myinput} onChange={(e)=>setInput(e.target.value)}/>
            <button type="submit" style={{marginTop:15}}>search</button>
        </form>
    </div>
  )
}

export default FilterInput