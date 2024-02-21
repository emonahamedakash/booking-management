import React, {useState, useEffect} from 'react'
import './Booking.css'
import { baseUrl } from '../../baseUrl'
import axios from "axios";

const Booking = () => {
  const [bookingList, setBookingList] = useState(['']);
  // const bookings = [
  //   {
  //     id: "01",
  //     date: "25/01/2024",
  //     reqBy: "Arif",
  //     handling: "Akash",
  //     hotel: "Pullman Zamzam Madinah",
  //     cin: "12/02/2024",
  //     cout: "22/02/2024",
  //     leadPax: "Ahmed Hossain",
  //     supplier: "EET",
  //     costPrice: "1260 USD",
  //     refNumber: "HY5JJH",
  //     invoice: "202400035",
  //     supplierPayment: "Option date: 29/01/2024",
  //     remarks: "Asked for Availability",
  //     hcn: "Not booked yet"
  //   },
  //   {
  //     id: "01",
  //     date: "25/01/2024",
  //     reqBy: "Arif",
  //     handling: "Akash",
  //     hotel: "Pullman Zamzam Madinah",
  //     cin: "12/02/2024",
  //     cout: "22/02/2024",
  //     leadPax: "Ahmed Hossain",
  //     supplier: "EET",
  //     costPrice: "1260 USD",
  //     refNumber: "HY5JJH",
  //     invoice: "202400035",
  //     supplierPayment: "Option date: 29/01/2024",
  //     remarks: "Asked for Availability",
  //     hcn: "Not booked yet"
  //   },
  //   {
  //     id: "01",
  //     date: "25/01/2024",
  //     reqBy: "Arif",
  //     handling: "Akash",
  //     hotel: "Pullman Zamzam Madinah",
  //     cin: "12/02/2024",
  //     cout: "22/02/2024",
  //     leadPax: "Ahmed Hossain",
  //     supplier: "EET",
  //     costPrice: "1260 USD",
  //     refNumber: "HY5JJH",
  //     invoice: "202400035",
  //     supplierPayment: "Option date: 29/01/2024",
  //     remarks: "Asked for Availability",
  //     hcn: "Not booked yet"
  //   },
  //   {
  //     id: "01",
  //     date: "25/01/2024",
  //     reqBy: "Arif",
  //     handling: "Akash",
  //     hotel: "Pullman Zamzam Madinah",
  //     cin: "12/02/2024",
  //     cout: "22/02/2024",
  //     leadPax: "Ahmed Hossain",
  //     supplier: "EET",
  //     costPrice: "1260 USD",
  //     refNumber: "HY5JJH",
  //     invoice: "202400035",
  //     supplierPayment: "Option date: 29/01/2024",
  //     remarks: "Asked for Availability",
  //     hcn: "Not booked yet"
  //   },
  //   {
  //     id: "01",
  //     date: "25/01/2024",
  //     reqBy: "Arif",
  //     handling: "Akash",
  //     hotel: "Pullman Zamzam Madinah",
  //     cin: "12/02/2024",
  //     cout: "22/02/2024",
  //     leadPax: "Ahmed Hossain",
  //     supplier: "EET",
  //     costPrice: "1260 USD",
  //     refNumber: "HY5JJH",
  //     invoice: "202400035",
  //     supplierPayment: "Option date: 29/01/2024",
  //     remarks: "Asked for Availability",
  //     hcn: "Not booked yet"
  //   },
   
    
  // ]
  useEffect(()=>{
    fetchBookings().then();
  }, [])
    const fetchBookings = async ()=>{
    
   await axios.get(`${baseUrl}/booking`).then((response) => {
      console.log(response.data);
      setBookingList(response.data);

    });
  }


  return (
    <div className='booking_container'>
      <br />
      <div className='booking_nav'>
        <button>Create New Record</button>
      </div>
        <br />
      <div className='booking_list'>
        <h2>All booking List</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Req. by</th>
              <th>Handling</th>
              <th>Hotel Name</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Lead Pax.</th>
              <th>Supplier</th>
              <th>Cost Price</th>
              <th>Ref. Num.</th>
              <th>Invoice No.</th>
              <th>Option Date</th>
              <th>Remarks</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookingList.map((b, i)=>{
              return(
         
                  <tr key={i}>
                    <td>{i+1}</td>
                    <td>{b.date}</td>
                    <td>{b.requestedBy}</td>
                    <td>{b.handling}</td>
                    <td>{b.hotel}</td>
                    <td>{b.checkIn}</td>
                    <td>{b.checkOut}</td>
                    <td>{b.leadPax}</td>
                    <td>{b.supplier}</td>
                    <td>1000</td>
                    <td>XHD1201</td>
                    <td>2425000132</td>
                    <td>Paid</td>
                    <td>{b.remarks}</td>
                    <td><button>Details</button></td>
                  </tr>
        
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Booking