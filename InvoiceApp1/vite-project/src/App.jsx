import { useState } from "react"
import Date from "./Components/Date"
import Client from "./Components/ClientDetail"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import MainDetail from "./Components/MainDetail"
import Notes from "./Components/Notes"
import Table from "./Components/Table"
function App() {
  const [showInvoice, setShowInvoice]= useState(false)
  const [name, setName] =useState("")
  const [adress, setAdress] =useState("")
  const [email, setEmail] =useState("")
  const [Phone, setPhone] =useState("")
  const [BankName, setBankName] =useState("")
  const [BankAccount, setBankAccount] =useState("")
  const [website, setWebsite] =useState("")
  const [ClientName, setClientName] =useState("")
  const [ClientAdress, setClientAdress] =useState("")
  const [invoiceNumber, setInvoiceNumber] =useState("")
  const [invoiceDate, setInvoiceDate] =useState("")
  const [DueDate, setDueDate] =useState("")
  const [notes, setNotes] =useState("")
  const handlePrint =() =>{
    window.print
  }
  return (
<>
<main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
 { showInvoice ? <div>
<Header handlePrint={handlePrint}/>

<MainDetail name={name} adress={adress}/>
<Client/>
<Date/>
  <Table/>
  <Notes/>
  <Footer name={name} adress={adress} website={website} email={email}/>
  <button onClick ={() =>setShowInvoice(false)} className = "mt-5 bg-mindaro-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover: bg-transparent hover: text-blue-500 transition-all duration-300 "> 
Edit Information</button>
</div> :(
  <><div className="flex flex-col justify-center">
    <label htmlFor="name"> Enter your name</label>
    <input type ="text" name ="text" id =" name" placeholder="Enter your Name"
  autoComplete="off"  
  value={name} 
  onChange = {(e)=> setName(e.target.value)}/>


   <label htmlFor="invoiceDate"> Enter Invoice Date</label>
    <input type ="text" name ="invoiceDate" id =" invoiceDate" placeholder="Enter Invoice Date"
  autoComplete="off"  
  value={invoiceDate} 
  onChange = {(e)=>setInvoiceDate(e.target.value)}/>
  
  <label htmlFor="email"> Enter your Email Address</label>
  <input type ="email" name ="email" id =" email" placeholder="Enter your Email"
  autoComplete="off" 
  value={email}
  onChange = {(e)=> setEmail(e.target.value)} /> 

   <label htmlFor="bankName"> Enter your Bank Name</label>
  <input type ="text" name ="bankName" id =" bankName" placeholder="Enter your Bank Name"
  autoComplete="off" 
  value={BankName}
  onChange = {(e)=> setBankName(e.target.value)} /> 

<label htmlFor="bankAccount"> Enter your Bank Account</label>
  <input type ="text" name ="bankAcount" id =" bankAccount" placeholder="Enter your Bank Account"
  autoComplete="off" 
  value={BankAccount}
  onChange = {(e)=> setBankAccount(e.target.value)} /> 
  <label htmlFor="phone"> Enter your Phone Number</label>
  <input type ="text" name ="text" id ="phone" placeholder="Enter your phone number"
  autoComplete="off" 
  value={Phone}
  onChange = {(e)=> setPhone(e.target.value)} /> 
  <label htmlFor="name"> Enter your Address</label>
  <input type ="text" name ="text" id ="adress" placeholder="Enter your Adress"
  autoComplete="off" 
  value={adress}
  onChange = {(e)=> setAdress(e.target.value)} /> 
  
  
  <label htmlFor="website">Your Website</label>
  <input type ="url" name ="website" id ="website" placeholder="your website"
  autoComplete="off" 
  value={website}
  onChange = {(e)=> setWebsite(e.target.value)} /> 
 
 <label htmlFor="name"> Enter your Client's Name</label>
  <input type ="text" name ="text" id ="client's Name" placeholder="Enter your Client's Name"
  autoComplete="off" 
  value={ClientName}
  onChange = {(e)=> setClientName(e.target.value)} /> 

<label htmlFor="name"> Enter your Client's Adress</label>
  <input type ="text" name ="text" id ="client's Adress" placeholder="Enter your Client's Adress"
  autoComplete="off" 
  value={ClientAdress}
  onChange = {(e)=> setClientAdress(e.target.value)} /> 
  <label htmlFor="invoiceNumber"> Enter Invoice Number</label>
    <input type ="text" name ="invoiceNumber" id =" invoiceNumber" placeholder="Enter Invoice Number"
  autoComplete="off"  
  value={invoiceNumber} 
  onChange = {(e)=>setInvoiceNumber(e.target.value)}/>

  <label htmlFor="invoiceDate"> Enter Invoice Date</label>
    <input type ="text" name ="invoiceDate" id =" invoiceDate" placeholder="Enter Invoice Date"
  autoComplete="off"  
  value={invoiceDate} 
  onChange = {(e)=>setInvoiceDate(e.target.value)}/> 

<label htmlFor="invoiceDueDate"> Enter Due Date</label>
    <input type ="text" name ="DueDate" id =" DueDate" placeholder="Enter Due Date"
  autoComplete="off"  
  value={DueDate} 
  onChange = {(e)=>setDueDate(e.target.value)}/>

  <label htmlFor="notes"> Additional notes</label>
  <textarea name ="notes" id =" notes" cols ="30" rows="10" placeholder="Additional notes"
  autoComplete="off"  
  value={notes} 
  onChange = {(e)=>setNotes(e.target.value)}></textarea>
 
   <button onClick =
   
   {() =>setShowInvoice(true)} className = "bg-mindaro-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover: bg-transparent hover: text-blue-500 transition-all duration-300 "> 
  Preview Invoice </button></div>
  </>
)
}
  </main>
  </>

  )
}

export default App
