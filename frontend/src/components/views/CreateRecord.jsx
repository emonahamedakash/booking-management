import React, {useState} from 'react'
import "./CreateRecord.css"
import axios from 'axios'
import { baseUrl } from '../../baseUrl'

const CreateRecord = () => {
    const [requestedBy,setReqBy] = useState("");
    const [handling,setHandling] = useState("");
    const [hotel,setHotel] = useState("");
    const [checkIn,setCin] = useState("");
    const [checkOut,setCout] = useState("");
    const [leadPax, setLeadpax] = useState("");
    const [supplier, setSupplier] = useState("");


    const handleCreate = async(e) =>{
        e.preventDefault();
        const today = new Date();
        const month = today.getMonth()+1;
        const year = today.getFullYear();
        const day = today. getDate();
        const date = day + "/" + month + "/" + year;
        const formData = {date,requestedBy, handling, hotel, checkIn, checkOut, leadPax, supplier};
        const response = await axios
        .post(`${baseUrl}/booking/create`, formData, {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }).then((res)=>{
          window.alert("Booking Created✔");
          console.log(formData)
        }).catch((err)=>{
          console.log(err);
        })
    }
  return (
    <div className='create_record_container'>
        <h2>Create a New Record</h2>
        <form>
            Requested By:<input type="text" name="reqBy" placeholder='Requested by' 
            onChange={(e)=>setReqBy(e.target.value)}
            /><br />
            Handling<input type='text' name='handling' placeholder='Handling'
            onChange={(e)=>setHandling(e.target.value)}
            /><br />
            Hotel Name<input type='text' name="hotel" placeholder='Hotel Name'
            onChange={(e)=>setHotel(e.target.value)}
            /><br />
            Check-in Date<input type="date" name='cin'
            onChange={(e)=>setCin(e.target.value)}
            /><br />
            Check-out Date<input type="date" name='cout'
            onChange={(e)=>setCout(e.target.value)}
            /><br />
            Lead Passenger<input type='text' name='leadPaxName'
            onChange={(e)=>setLeadpax(e.target.value)}
            /><br />
            Supplier<input type='text' name='supplier' placeholder='Supplier name'
            onChange={(e)=>setSupplier(e.target.value)}
            /><br />
             <br />
            <button onClick={(e)=>handleCreate(e)}>Create</button>
        </form>
    </div>
  )
}

export default CreateRecord