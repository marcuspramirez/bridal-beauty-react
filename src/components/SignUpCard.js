import React from 'react';
import './SignUpCard.css';


function SignUpForm() {
    return (
     <div className='cards'>
       


       <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
 <form>
  <label>
    Email:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
 <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
 <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>


     </div>
    );
}

export default SignUpForm;