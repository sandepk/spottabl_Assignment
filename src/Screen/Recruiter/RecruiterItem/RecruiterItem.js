import React,{useState,useEffect} from "react";
import "./RecruiterItem.scss";
import { Avatar } from "@mui/material";
import { Delete } from "@material-ui/icons";
import Dropdown from "../../../Components/dropdown/Dropdown";
import { IconButton } from "@mui/material";

import { roles } from "../../../Data/data";
const RecruiterItem = (props) => {
    const [roleDefined,setRoleDefined]  = useState({});
    useEffect(()=>{
        setRoleDefined(props.item.roleDefined)
    },[])

  return (
    <div className="recruiterItem__container">
      <div className="recruiterItem__logoDetails">
        <div className="recruiterItem__logo">
          <Avatar />
        </div>
        <div className="recruiterItem__details">
          <div className="recruiterItem__name">{props.item.name}</div>
          <div className="recruiterItem__hiringEmail">
            <div className="recruiterItem__hiring">Hiring Manager</div>
            <div className="recruiterItem__email">{props.item.email}</div>
          </div>
        </div>
      </div>
      <div className="recruiterItem__dropdownDelete">
        <div className="recruiterItem__dropdown">
          <Dropdown roles={roles}
            selectedValue={roleDefined}
            setSelectedValue={setRoleDefined}
          />
        </div>
        <div className="recruiterItem__delete">
            <IconButton onClick={()=>props.deleteItem(props.index)}>

          <Delete />
            </IconButton>
        </div>
      </div>
    </div>
  );
};

export default RecruiterItem;
