import React, { useState } from "react";
import "./RecruiterTextbox.scss";
import Dropdown from "../../Components/dropdown/Dropdown";
import InputTag from "../../Components/UI/InputTag/InputTag";
import { Button } from "@mui/material";
const RecruiterTextbox = (props) => {
  const [textBoxData, setTextBoxData] = useState("");
  const [roleDefined, setRoleDefined] = useState({
    role: "View Access",
    description: "Gives access to view the job and add comments",
  });
  const submitButton = () => {
    if(textBoxData.length >0){
      let name=textBoxData;
      let email="";
      if(textBoxData.includes("@")){
        name="Not Given";
        email=textBoxData

      }
      props.updateLists({
        name:name,
        email:email,
        roleDefined:roleDefined
      })
     
      setTextBoxData("");
    }

  };

  const inputHandler = (value, identifier) => {
    setTextBoxData(value);
  };
  const setRoleDefinedFunc = (roleDefined)=>{
    setRoleDefined(roleDefined);
    props.setRoleDefinedRecruiter(roleDefined)
  }

  return (
    <div className="recruiterTextBox__container">
      <div className="recruiterTextBox__inputTag">
        <InputTag value={textBoxData} setValue={inputHandler} width="100%" 
        placeholder="Add by Name or email"
        
        
        />
      </div>
      <div className="recruiterTextBox__dropdown">
        <Dropdown
          roles={props.roles}
          selectedValue={roleDefined}
          setSelectedValue={setRoleDefinedFunc}
        />
      </div>
      <div className="recruiterTextBox__submitButton">
        <Button 
        style={{backgroundColor:"#2541A2",color:"white",width:"100px"}}
        color="primary"
        onClick={submitButton}
        disabled={textBoxData.length==0}
        >Submit</Button>
      </div>
    </div>
  );
};

export default RecruiterTextbox;
