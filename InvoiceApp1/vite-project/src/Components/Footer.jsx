export default function Footer({name, email, phone, bank, accountHolder,  accountNumber, website}){
    return(
        <>
            <footer>
    <ul className="flex flex-wrap items-center justify-center">
     <li><span className="font-bold">Your Name: </span>{name}</li> <br/>
      <li><span className="font-bold">Your Email:</span> {email}</li>
      <li><span className="font-bold">Phone Number:</span> {phone}</li>
      <li><span className="font-bold">Bank:</span>{bank}</li>
      <li><span className="font-bold">Account holder:</span> {accountHolder}</li>
      <li><span className="font-bold">Account Number:</span>{accountNumber}</li>
      <li><span className="font-bold">Website:</span> <a href={website} target="-blank" rel="noopenner noreferrer" > {website}</a></li>
    </ul>
  </footer>
        </>
    )
}