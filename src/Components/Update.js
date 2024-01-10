import React, { useEffect, useState } from "react";
import { Form, Button, Checkbox } from "semantic-ui-react";
import { API_URL } from "../Constants/URL";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Update() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [checked, setChecked] = useState(true);
  const [id, setId] = useState(null);
  const navigate = useNavigate();

  const updateUser = async () => {
    await axios.put(API_URL + id, {
      firstName,
      lastName,
      checked,
    });
    navigate("/read");
  };

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setFirstName(localStorage.getItem("firstName"));
    setlastName(localStorage.getItem("lastName"));
    setChecked(localStorage.getItem("checked"));
  }, []);
  return (
    <Form className="form">
      <Form.Field>
        <label>First Name : </label>
        <input
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          placeholder="Enter First  Name"
        />
      </Form.Field>
      <br />
      <Form.Field>
        <label>Last Name : </label>
        <input
          value={lastName}
          onChange={(event) => setlastName(event.target.value)}
          placeholder="Enter Last Name"
        />
      </Form.Field>
      <br />
      <Form.Field>
        <Checkbox
          checked={checked}
          onChange={() => setChecked(!checked)}
          label="Agree the terms & Conditions"
        />
      </Form.Field>
      <br />
      <Button onClick={updateUser}>Update</Button>
    </Form>
  );
}

export default Update;
