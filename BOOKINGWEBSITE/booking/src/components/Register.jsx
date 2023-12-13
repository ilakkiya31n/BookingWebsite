import  "./Register.css";
const Register=()=>{
  const currentDate = new Date().toISOString().split('T')[0];
     return(
    <div class="cols">
     <div class="container">
      <form  class="registration">
          <h1>Create a Account</h1><br/>
          <label for="name"><b>FullName</b></label>
          <input type="text" placeholder="Enter FirstName"  required/>
          <input type="text" placeholder="Enter LastName"  required/><br/><br/>
          <label for="no"><b>Phone number</b></label>
          <input type="number" placeholder="Enter Phone number" minlength="10" required/>
          <label for="num"><b>Number of Passengers</b></label>
          <input type="number"   min={0} required/><br/><br/>
          <label for="dat"><b>Date of Travelling</b></label>
          <input type="Date" placeholder="Enter Date"  min={currentDate} required/>
          <label for="Time"><b>Time</b></label>
          <input type="Time" placeholder="Enter Time"required/><br/><br/>
          <label><b>Gender :</b></label>
          <input type="radio"  name="gender" value="Male"/>
         <label for="html">Male</label>
         <input type="radio"  name="gender" value="Female"/>
         <label for="css">Female</label><br/>
          <label for="details"><b>Address</b></label>
          <input name="textbox" type="text" placeholder="Door no,Street" />
          <input name="textbox" type="text" placeholder="Address" /><br/>
  
          
          <div class="clearfix">
            <button type="button" class="cancelbtn">Cancel</button>
            <button type="submit" class="signupbtn">Sign Up</button>
          </div>
      </form>
    </div>
  </div>
     )
}
export default Register