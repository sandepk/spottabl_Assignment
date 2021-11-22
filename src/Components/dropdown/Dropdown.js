import React, { useEffect, useState, useRef } from "react";
import './Dropdown.css';
const Dropdown = (props) => {
  const [roles,setRoles] = useState([]);
  useEffect(()=>{
    setRoles(props.roles);
  },[])
  const [open, setOpen] = useState(false);
  const reference = useRef(null);
  function toggle(e) {
    setOpen(e && e.target ==reference.current);
  }
 
  function selectOption(option) {
    setOpen(false);
    props.setSelectedValue(option)
  }
  // important for 
  useEffect(() => {
    ["click", "blur"].forEach((e) => {
      document.addEventListener(e, toggle);
    });
    return () =>
      ["click", "blur"].forEach((e) => {
        document.removeEventListener(e, toggle);
      });
  }, []);
  return (
      <div className="dropdown__container">
        <button
          className={`dropdown__selectedValue` }
          ref={reference}
          onClick={toggle}
          onBlur={toggle}
          // disabled={props.disabled}
        >
          {props.selectedValue?.["role"]}
        </button>
        <div
          className={`dropdownOptions ${
            open ? "showOptions" : "dontShowOptions"
          }`}
          style={{ width: props.width }}
        >
          {roles && Array.isArray(roles) &&  roles.map((option, index) => (
            <div
              key={index}
              className={`dropdownOption 
                 
                `}
              onClick={() => selectOption(option)}
              onTouchEnd={() => selectOption(option)}
            >
              <div className="rolesAndDescription">

              {option["role"]}
              <div className="description">{option["description"]}</div>
            </div>
              </div>
          ))}
        </div>
      </div>
  );
};

export default Dropdown;

