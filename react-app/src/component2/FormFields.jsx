import React, { useState } from 'react'

function FormFields({ sendDataToParent }) {
    const [formData, setFormData] = useState(
        { Name: "", email:"", message: "", choose:"", checkbox:"", date:"", radio:"" }
    );
    
  const [errors, setErrors] = useState({ name: '', desciption: '' });
  
    function handleChange(e){
       
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // console.log(name)
        validateField(name, value);
      };
    
      function validateField(name, value) {
        let error = "";
        if (value.trim() ==="") {
          error = `${name} is required`
        } 
        else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/) {
          error = 'email is invalid.';
        }
        setErrors({ ...errors, [name]: error });
      };

    function handleSunmit(e){
        e.preventDefault()
        console.log("form submmited")
        // console.log(formData)
        sendDataToParent(formData)
    }

  return (
    <div>
        <form onSubmit={handleSunmit}>
            <div>
                <label >Name</label>
                <input type='text' name="Name" onChange={handleChange}/>
            </div>
            <div>
                <label >email</label>
                <input type='email' name="email" onChange={handleChange}/>
            </div>
            <div>
                <div><label >message</label></div>
                <textarea name="message" onChange={handleChange}></textarea>
            </div>
            <div>
                <label ></label>
                <select name="choose" onChange={handleChange}>
                    <option>choose</option>
                    <option>low</option>
                    <option>high</option>
                </select>
            </div>
            <div>
                <label >checkbox</label>
                <input type='checkbox' name='checkbox' onChange={handleChange}/>
            </div>
            <div>
                <label >radio</label>
                <input type='radio' name="radio" onChange={handleChange}/>
            </div>
           
            <div>
                <label >date</label>
                <input type='date' name="date" onChange={handleChange}/>
            </div>
            <div>
                <button type='submit'>submit</button>
            </div>
            
        </form>
    </div>
  )
}

export default FormFields