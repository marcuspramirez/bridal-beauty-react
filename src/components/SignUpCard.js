import React from "react";
import "./SignUpCard.css";

function SignUpForm() {
  return (
    <div className="cards">
      <div class="flex-container">
        <form className="formBorder">
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          {/* <input type="submit" value="Submit" /> */}
        </form>
        <form>
          <label>
            Email:
            <input type="text" name="name" />
          </label>
          {/* <input type="submit" value="Submit" /> */}
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
