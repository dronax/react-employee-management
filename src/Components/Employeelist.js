import React, { useState } from "react";
import "./style.css";
import Delete from "../image/delete.jpeg";
import Edit from "../image/edit.png";
import { delemp} from "../Redux/action";
import { useDispatch } from "react-redux";
import EditEmployee from "./EditEmployee";

const Employeelist = ({data}) => {
  const[edit,setedit]=useState(false)
  const dispatch=useDispatch()
  const delhandle=(id)=>{
    dispatch(delemp(id))
  }
  const edithandle=()=>{
    if (edit === false) {
      setedit(true);
    } else {
      setedit(false);
    }
  }
  if(data!=null){
  return (<>
    <div className="box1">
      {" "}
      <div className="data">
        <div>{data?.id}</div>
        <div>{data?.name}</div>
        <div>{data?.phone}</div>
        <div>{data?.department}</div>
      </div>
      <div className="images">
        <div>
          <img
            src={Delete}
            alt="delete"
            className="delete"
            onClick={() => delhandle(data.id)}
          ></img>
        </div>
        <div>
          <img src={Edit} alt="edit" className="edit" onClick={()=>edithandle()}></img>
        </div>
      </div>
      
    </div>
    <EditEmployee edit={edit} setedit={setedit}/>
    </>
  );
  }
};

export default Employeelist;
