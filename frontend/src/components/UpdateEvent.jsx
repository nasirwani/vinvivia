/* eslint-disable no-undef */
import { useState ,useEffect} from "react";
import{useParams} from 'react-router-dom'

const UpdateEvent = () => {
  const params=useParams()


  useEffect(()=>{
    getSingleEvent()
  })
  const getSingleEvent=async()=>{
   let result = await fetch(`/singleevent${params.id}`,{
    method: "GET",

   })
   result = await result.json()
   console.log(result)

  }
  return (
    <h1>hello</h1>
    // <div>
   
    //   <input type="text" placeholder="Event Name" value={tname} />
    //   <input type="text" placeholder="Tenant Name" value={tenant} />
    //   <input type="text" placeholder="Event Format " value={format} />
    //   <button>Update</button>
    // </div>
  );
};
export default UpdateEvent;
