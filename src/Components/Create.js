import React, { useState } from "react";
import { API_URL } from "../Constants/URL";
import { Form, Button, Checkbox } from "semantic-ui-react";
import axios from "axios"
import {useNavigate} from "react-router-dom"
function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const postData =async ()=>{
   axios.post(API_URL,{
    firstName,
    lastName,
    checked
   })
   navigate("/read");
  }
  return (
    <Form className="form">
      <Form.Field>
        <label>First Name : </label>
        <input
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
          placeholder="Enter First  Name"
        />
      </Form.Field>
      <br />
      <Form.Field>
        <label>Last Name : </label>
        <input
          value={lastName}
          onChange={event => setlastName(event.target.value)}
          placeholder="Enter Last Name"
        />
      </Form.Field>
      <br />
      <Form.Field>
        <Checkbox
          checked={true}
          onChange={() => setChecked(!checked)}
          label="Agree the terms & Conditions"
        />
      </Form.Field>
      <br />
      <Button onClick={postData}>Submit</Button>
    </Form>
  );
}

export default Create;
