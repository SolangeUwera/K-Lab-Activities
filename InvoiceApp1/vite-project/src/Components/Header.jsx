export default function Header({handlePrint}){
    return(
        <>
        <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
    <div><h2 className="font-bold uppercase tracking-wide text-4xl mb-3">Invoicer</h2></div>
  <div>

  <ul className=" flex items-center justify-between flex-wrap"> 
  <li><button 
  className="btn btn-print" > Print </button></li>
  <li><button className="btn btn-dawnload"> Dawnload</button></li>
  <li><button className="btn btn-Send">Send</button></li>
  </ul>
  </div>
  </header>
        </>
    )
}