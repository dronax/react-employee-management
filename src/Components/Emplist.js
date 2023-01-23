import React, { useEffect, useState } from "react";
import "./style.css";
import Add from "../image/add.png";
import {addemp} from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import Employeelist from "./Employeelist";
import AddEmployee from "./AddEmployee";  


const Emplist = () => {
  const emp = useSelector((state) => state?.emp);
  const [add,setAdd]=useState(false)
  const toggle=()=>{
    if(add===false){
    setAdd(true)
    }
    else{
      setAdd(false)
    }
    console.log("toggle", add);
  }
  return (
    <div>
      <div className="addbar">
        <div className="addbutton">
          <img
            src={Add}
            className="addbuttonimg"
            alt="addbutton"
            onClick={() => toggle()}
          ></img>
        </div>
      </div>
      <div className="list">
        {emp.map((i) => (
          <Employeelist data={i} />
        ))}
        <AddEmployee trigger={add} settrigger={setAdd} />
      </div>
    </div>
  );
};

export default Emplist;
