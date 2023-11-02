export default function Date({invoiceNumber,invoiceDate, DueDate}){
    return(
        <>
        <article className="mt-5 flex flex-col items-end justify-end">
<ul>
  <li> <span className="font-bold">{invoiceNumber} </span></li>
  <li> <span className="font-bold">{invoiceDate} </span> </li>
  <li> <span className="font-bold"> {DueDate} </span> </li>
</ul>
</article>
        </>
    )
}

