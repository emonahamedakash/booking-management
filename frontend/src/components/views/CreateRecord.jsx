import React, {useState} from 'react'
import "./CreateRecord.css"

const CreateRecord = () => {
    const [reqBy,setReqBy] = useState("");
    const [handling,setHandling] = useState("");
    const [hotel,setHotel] = useState("");
    const [cin,setCin] = useState("");
    const [cout,setCout] = useState("");
    const [leadpax, setLeadpax] = useState("");
    const [supplier, setSupplier] = useState("");
    const [remarks, setRemarks] = useState("");


    const handleCreate = (e) =>{
        e.preventDefault();
        const formData = {reqBy, handling, hotel, cin, cout, leadpax, supplier, remarks};
        console.log(formData);
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
            Remarks<input type='text' name='remarks' placeholder='remarks'
            onChange={(e)=>setRemarks(e.target.value)}
            /><br /><br />
            <button onClick={(e)=>handleCreate(e)}>Create</button>
        </form>
    </div>
  )
}

export default CreateRecord