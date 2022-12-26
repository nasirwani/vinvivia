// /* eslint-disable no-undef */
// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const UpdateEvent = () => {
//   const params = useParams();
//   const [eventName, setEventName] = useState("");
//   const [eventtype, setEventType] = useState("");
//   const [eventFormat, setEventFormat] = useState("");
//   const Navigate = useNavigate();

//   useEffect(() => {
//     getSingleEvent();
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   },[]);
//   const getSingleEvent = async () => {
//     let result = await fetch(`http://localhost:5001/singleevent/${params.id}`, {
//       method: "GET",
//     });
//     result = await result.json();
//     console.log(result);
//     setEventName(result.eventName);
//     setEventType(result.eventtype);
//     setEventFormat(result.eventFormat);
//   };
//   const Update = async () => {
//     console.log(eventName, eventtype, eventFormat)
//     const result = await fetch(
//       `http://localhost:5001/updatedevent/${params.id}`,
//       {
//         method: "PUT",
//         body: JSON.stringify({eventName, eventtype,eventFormat}),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     console.log(result);
//     if (result.status===200) {
//       Navigate("/");
//     }
//   };
//   return (
//     <div>
   

//       <input
//         type="text"
//         // placeholder="Event Name"
//         value={eventName}
//         onChange={(e) => setEventName(e.target.value)}
//       />
//       <input
//         type="text"
//         // placeholder="Tenant Name"
//         value={eventtype}
//         onChange={(e) => setEventType(e.target.value)}
//       />
//       <input
//         type="text"
//         // placeholder="Event Format "
//         value={eventFormat}
//         onChange={(e) => setEventFormat(e.target.value)}
//       />
//       <button onClick={Update}>Update</button>
    
//     </div>
//   );
// };
// export default UpdateEvent;
