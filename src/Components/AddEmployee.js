import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css"
import {addemp} from "../Redux/action";
import "../App.css"


const AddEmployee = (props) => {
  const emp=useSelector((state)=>state?.emp)
  const [id,setId]=useState('')
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartmnet] = useState("");
  const dispatch=useDispatch()
  const submit=()=>{
    const data={id:id,name:name,phone:phone,department:department}
    if(data.id!=='' && data.name!=='' && data.phone!=='' && data.department!==''){
    setId('')
    setName('')
    setPhone('')
    setDepartmnet('')
    dispatch(addemp(data))
    props.settrigger(false);}
    else{
      alert("Fields are Empty")
    }
  }
  
  return props.trigger?(
    
        <div>
          <div className="add">
            <div className="box">
              <button className="close-button" onClick={()=>{props.settrigger(false)}}>Close</button>
              <form>
                <label>ID:</label>
                <br />
                <input
                  type="text"
                  name="fname"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
                <br />
                <label>Name:</label>
                <br />
                <input
                  type="text"
                  name="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <label>Phone:</label>
                <br />
                <input
                  type="text"
                  name="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <br />
                <label>Department:</label>
                <br />
                <input
                  type="text"
                  name="Department"
                  value={department}
                  onChange={(e) => setDepartmnet(e.target.value)}
                />
                <br />
              </form>
              <br />
              <button className="add-button" onClick={submit}>Add Employee</button>
            </div>
          </div>
        </div>
  ):''
};

export default AddEmployee;
