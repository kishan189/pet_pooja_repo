import React from 'react'

function Tbody({datas}) {

  return (
    <tbody>
        {datas.map((el,i)=>{
            return (
                <tr key={i}>
                    <td>{el.title}</td>
                    <td>{el.price}</td>
                    <td>{el.rating}</td>
                </tr>
                )
            })}
    </tbody>
  )
}

export default Tbody