
import React, { useState } from 'react'
import './CompareProducts.css';

const CompareProducts = () => {
  const [data,setData] = useState([
    {id: 1,username: 'furqan'},
    {id: 2,username: 'usman'},
    {id: 3,username: 'khizer'},
    {id: 4,username: 'husnain'},
    {id: 5,username: 'hafiz'},
    {id: 6,username: 'sameet'},
  ])

const handeldelete =(id) => {
const newData = data.filter(data => data.id !== id)
setData(newData);
}

  return (
   <div>
   <h3>Furqan Rasool</h3>
   <div>{data.map((da)=><div><div className="app">{da.id} . {da.username}</div>
   <button onClick={()=>handeldelete(da.id)}>Delete</button></div>)}
   
   </div>
   </div>
  
  )
}

export default CompareProducts