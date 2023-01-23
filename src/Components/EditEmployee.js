import React from 'react'
import { editemp } from '../Redux/action';
import { useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';

const EditEmployee = (props) => {
    const dispatch=useDispatch()
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [department, setDepartmnet] = useState("");
      const submit = () => {
        const data = {
          id: id,
          name: name,
          phone: phone,
          department: department,
        };
        if (
          data.id !== "" &&
          data.name !== "" &&
          data.phone !== "" &&
          data.department !== ""
        ) {
          setId("");
          setName("");
          setPhone("");
          setDepartmnet("");
          dispatch(editemp(props.realdata,data));
          props.setedit(false);
        } else {
          alert("Fields are Empty");
        }
      };
  return props.edit ? (
    <div>
      <div className="add">
        <div className="box">
          <button
            className="close-button"
            onClick={() => {
              props.setedit(false);
            }}
          >
            Close
          </button>
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
          <button className="add-button" onClick={submit}>
            Edit-Employee
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default EditEmployee