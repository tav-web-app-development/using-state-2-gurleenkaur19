
function BillingForm({billingFormFields, setbillingFormFields} = false) {
  return (
    <div>
      
        <label htmlFor="fname">First name:</label><br/>
        <input type="text" id="fname" name="fname" defaultValue={billingFormFields.firstname} 
        onChange={(e) => setbillingFormFields((prevData) => ({ ...prevData, firstname: e.target.value.trim(),}))} /><br />
        <label htmlFor="lname">Last name:</label><br />
        <input type="text" id="lname" name="lname" defaultValue={billingFormFields.lastname}
        onChange={(e) => setbillingFormFields((prevData) => ({ ...prevData, lastname: e.target.value.trim(),}))} /><br />
        <label htmlFor="fname">Adress:</label><br/>
        <input type="text" id="Adress" name="Adress" defaultValue={billingFormFields.address}
        onChange={(e) => setbillingFormFields((prevData) => ({ ...prevData, address: e.target.value.trim(),}))}/><br />
        <label htmlFor="fname">City:</label><br/>
        <input type="text" id="City" name="City" defaultValue={billingFormFields.city}
        onChange={(e) => setbillingFormFields((prevData) => ({ ...prevData, city: e.target.value.trim(),}))}/><br />
        <label htmlFor="fname">State:</label><br/>
        <input type="text" id="State" name="State" defaultValue={billingFormFields.state} 
        onChange={(e) => setbillingFormFields((prevData) => ({ ...prevData, state: e.target.value.trim(),}))}/><br />
        <label htmlFor="fname">Postal code:</label><br/>
        <input type="text" id="code" name="code" defaultValue={billingFormFields.postalCode} 
        onChange={(e) => setbillingFormFields((prevData) => ({ ...prevData, postalCode: e.target.value.trim(),}))}/><br />
        
    </div>
  )
}

export default BillingForm
