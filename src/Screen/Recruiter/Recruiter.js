import React,{useState} from 'react';
import './Recruiter.scss';
import RecruiterTextbox from '../RecruiterTextbox/RecruiterTextbox';
import RecruiterItem from './RecruiterItem/RecruiterItem';
import { roles } from '../../Data/data';
const Recruiter = () => {
    const [lists,setLists] = useState([
        {
            name:"Vanishree Deshpande",
            email:"vani@spottabl.com",
            roleDefined:{
                role: "View Access",
                description: "Gives access to view the job and add comments",
              }
          },
        {
            name:"Chilman Mehrotra",
            email:"chilman@spottabl.com",
            roleDefined: {
                role: "Admin Role",
                description: "Given full access to the job and candidates",
              }
          },
        {
            name:"Anupam Chaudhary",
            email:"anupam@spottabl.com",
            roleDefined:{
                role: "Edit Access",
                description: "Gives access to edit the job and view the candidates",
              },
          }
    ]);
    const [roleDefinedRecruiter,setRoleDefinedRecruiter] = useState({
        role: "View Access",
        description: "Gives access to view the job and add comments",
      })
    const updateLists = (data) =>{
        let tempLists = lists;
        tempLists.push(data);
        setLists(prev=>[...tempLists]);
        
    }

    const deleteItem=(index)=>{
        let tempList = lists;
        tempList.splice(index,1);
        setLists(prev=>[...tempList])
    }

    const chosenAccessView = (lists) => {
        let tempList = [];
        if (Array.isArray(lists) && roleDefinedRecruiter["role"]) {
          tempList = lists.filter(
            (listItem) => roleDefinedRecruiter["role"].indexOf(listItem.roleDefined["role"]) > -1
          );
          return tempList;
        } else {
          return lists;
        }
      };
    let renderedLists = null;
    renderedLists = lists.length > 0 && chosenAccessView(lists).map((item,index)=>{
        return <RecruiterItem key={index}
        item={item}
        index={index}
        deleteItem={deleteItem}
        />

    });

    return (
         <div className="recruiter__container">
        <div className="recruiter__textBox">
            <RecruiterTextbox 
            roles={roles}
            updateLists={updateLists}
            setRoleDefinedRecruiter={setRoleDefinedRecruiter}
            />
        </div>
        {renderedLists}
        </div>
    )
    
}

export default Recruiter
