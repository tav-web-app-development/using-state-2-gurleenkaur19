import { useState } from "react"
import BillingForm from "./BillingForm"


function htmlForm({}) {
  const [billingAdress,setbillingAdress] = useState(false);
  const [billingFormFields,setbillingFormFields] = useState({
    firstname: "",
    lastname: "",
    address:"",
    city: "",
    state:"",
    postalCode: "",
  });
    return (
    <div>
      <form >
        <label htmlFor="fname">First name:</label><br/>
        <input type="text" id="fname" name="fname"/><br />
        <label htmlFor="lname">Last name:</label><br />
        <input type="text" id="lname" name="lname" /><br />
        <label htmlFor="fname">Adress:</label><br/>
        <input type="text" id="Adress" name="Adress" /><br />
        <label htmlFor="fname">City:</label><br/>
        <input type="text" id="City" name="City" /><br />
        <label htmlFor="fname">State:</label><br/>
        <input type="text" id="State" name="State"  /><br />
        <label htmlFor="fname">Postal code:</label><br/>
        <input type="text" id="code" name="code"  /><br />
        <input type="checkbox" id="billingadd" name="billingadd" onChange={(e)=>setbillingAdress(e.target.checked)} />
        <label htmlFor="billingadd">Use shipping address as billing address</label><br/>
        {billingAdress && <BillingForm billingFormFields={billingFormFields} setbillingFormFields={setbillingFormFields}
        />}
        <input type="submit" value="Submit" />
        </form> 
    </div>
  )
}

export default htmlForm
