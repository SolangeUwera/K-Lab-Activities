import React,{useState} from 'react';

function Invoices(){

  const Invoices = [
    {
      productcode:'#RRTYE',
      date:'2023-10-24',
      customerName:"Garrix",
      totalPrice:1000.0,
      status:'paid',
  
    },{
      productcode:'#RRTYD',
      date:'2023-10-04',
      customerName:"Kavuyo",
      totalPrice:1260.0,
      status:'pending',
  
    },
    {
      productcode:'#RRTYD',
      date:'2023-10-04',
      customerName:"Wizzy",
      totalPrice:1560.0,
      status:'pending',
  
    },
    {
      productcode:'#RRTFE',
      date:'2023-10-25',
      customerName:"Vradmir",
      totalPrice:2000.0,
      status:'vice-versa',
  
    },{
      productcode:'#RRTYE',
      date:'2023-10-24',
      customerName:"Garrix",
      totalPrice:1000.0,
      status:'paid',
  
    },{
      productcode:'#RRTYD',
      date:'2023-10-04',
      customerName:"Kavuyo",
      totalPrice:1260.0,
      status:'pending',
  
    },
    
  
  ]
  
  return (
    <div>
      {
        Invoices.map((item, index) =>(
          <div className='array' key={index} >
            <h2 className='text'> {item.productcode}</h2>
            <h2 className='text'> {item.date}</h2>
            <h2 className='text'> {item.customerName}</h2>
            <h2 className='text'> {item.totalPrice}</h2>
            
            <select>
            {item.status}
              <option className='pending'>pending</option>
              <option className='paid'>paid</option>
              <option className='vice'>vice-versa</option>
            </select>
            

          </div>
          
        ))
      }
    </div>
  )


} 








export default Invoices;