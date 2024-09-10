import { Console } from "console";
import PropTypes, { InferProps } from "prop-types";
import { useState } from "react";

function CustomForm({handleSubmit}:InferProps<typeof CustomForm.propTypes>) {
    
    return (
      <div className="form-section">
        <form className="flex flex-column" onSubmit={handleSubmit? handleSubmit: ()=>{console.log("NOTHING");
        }}>
            <input name="name" type="text" placeholder="Enter your name" />
            <select name="gender" id="gender">
                <option value="Male">Male</option>    
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
            <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  CustomForm.propTypes = {
    handleSubmit: PropTypes.func
  }


  
  export default CustomForm;