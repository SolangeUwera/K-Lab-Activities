export default function Client({ClientName, clientAdress}){
    return(  
    <>
     <section className="mt-5">
  <h2 lassName="text-xl uppercase">{ClientName}</h2>
  <p>{clientAdress}</p>
  </section>
    </>

    )
      
}