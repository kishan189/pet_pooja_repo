import React,{useState} from 'react'
import FormFields from './FormFields'
import "./form.css";

function FormContainer() {
  const [dataFromChild, setDataFromChild] = useState({});

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
    console.log("parent",data)
  };
  return (
    <FormFields sendDataToParent={handleDataFromChild}/>
  )
}

export default FormContainer