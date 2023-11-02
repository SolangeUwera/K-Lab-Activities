export default function MainDetail({name, adress}){
    return(  
    <>
     <section className="flex items-end justify-end"> 
  <h2 className=" font-bold text-xl uppercase md: txt-xl">{name}</h2>
  <p>{adress}</p>
 </section>
    </>

    )
      
}