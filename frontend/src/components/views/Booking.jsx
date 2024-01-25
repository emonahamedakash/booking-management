import React from 'react'
import './Booking.css'

const Booking = () => {
  const bookings = [
    {
      id: "01",
      date: "25/01/2024",
      reqBy: "Arif",
      handling: "Akash",
      hotel: "Pullman Zamzam Madinah",
      cin: "12/02/2024",
      cout: "22/02/2024",
      leadPax: "Ahmed Hossain",
      supplier: "EET",
      costPrice: "1260 USD",
      refNumber: "HY5JJH",
      invoice: "202400035",
      supplierPayment: "Option date: 29/01/2024",
      remarks: "Asked for Availability",
      hcn: "Not booked yet"
    },
    {
      id: "01",
      date: "25/01/2024",
      reqBy: "Arif",
      handling: "Akash",
      hotel: "Pullman Zamzam Madinah",
      cin: "12/02/2024",
      cout: "22/02/2024",
      leadPax: "Ahmed Hossain",
      supplier: "EET",
      costPrice: "1260 USD",
      refNumber: "HY5JJH",
      invoice: "202400035",
      supplierPayment: "Option date: 29/01/2024",
      remarks: "Asked for Availability",
      hcn: "Not booked yet"
    },
    {
      id: "01",
      date: "25/01/2024",
      reqBy: "Arif",
      handling: "Akash",
      hotel: "Pullman Zamzam Madinah",
      cin: "12/02/2024",
      cout: "22/02/2024",
      leadPax: "Ahmed Hossain",
      supplier: "EET",
      costPrice: "1260 USD",
      refNumber: "HY5JJH",
      invoice: "202400035",
      supplierPayment: "Option date: 29/01/2024",
      remarks: "Asked for Availability",
      hcn: "Not booked yet"
    },
    {
      id: "01",
      date: "25/01/2024",
      reqBy: "Arif",
      handling: "Akash",
      hotel: "Pullman Zamzam Madinah",
      cin: "12/02/2024",
      cout: "22/02/2024",
      leadPax: "Ahmed Hossain",
      supplier: "EET",
      costPrice: "1260 USD",
      refNumber: "HY5JJH",
      invoice: "202400035",
      supplierPayment: "Option date: 29/01/2024",
      remarks: "Asked for Availability",
      hcn: "Not booked yet"
    },
    {
      id: "01",
      date: "25/01/2024",
      reqBy: "Arif",
      handling: "Akash",
      hotel: "Pullman Zamzam Madinah",
      cin: "12/02/2024",
      cout: "22/02/2024",
      leadPax: "Ahmed Hossain",
      supplier: "EET",
      costPrice: "1260 USD",
      refNumber: "HY5JJH",
      invoice: "202400035",
      supplierPayment: "Option date: 29/01/2024",
      remarks: "Asked for Availability",
      hcn: "Not booked yet"
    },
   
    
  ]
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
            {bookings.map((b)=>{
              return(
                <>
                  <tr>
                    <td>{b.id}</td>
                    <td>{b.date}</td>
                    <td>{b.reqBy}</td>
                    <td>{b.handling}</td>
                    <td>{b.hotel}</td>
                    <td>{b.cin}</td>
                    <td>{b.cout}</td>
                    <td>{b.leadPax}</td>
                    <td>{b.supplier}</td>
                    <td>{b.costPrice}</td>
                    <td>{b.refNumber}</td>
                    <td>{b.invoice}</td>
                    <td>{b.supplierPayment}</td>
                    <td>{b.remarks}</td>
                    <td><button>Details</button></td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Booking