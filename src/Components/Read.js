import React,{useState,useEffect} from "react";
import { Table, Button } from "semantic-ui-react";
import { API_URL } from "../Constants/URL";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Read  () {
  const [apiData,setApiData] = useState([]);
  const deleteUser = async (id)=> {
    await axios.delete(API_URL + id)
    //await axios.delete(`${API_URL}/${id}`)
    callGetAPI()
  }
  const navigate = useNavigate();
const updateUser = ({firstName,lastName,checked,id})=>{
 
  localStorage.setItem('firstName',firstName)
  localStorage.setItem('lastName',lastName)
  localStorage.setItem('checked',checked)
  localStorage.setItem('id',id)
  navigate("/update")  
  
}
  const callGetAPI = async()=>{
    const resp =  await axios.get(API_URL);
    setApiData(resp.data)
  }
  useEffect (()=>{
  callGetAPI();
  },[]);
   
  return (
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>First Name </Table.HeaderCell>
          <Table.HeaderCell>Last Name </Table.HeaderCell>
          <Table.HeaderCell>Checked </Table.HeaderCell>
          <Table.HeaderCell>Delete </Table.HeaderCell>
          <Table.HeaderCell>Update </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
       
      {
        apiData.map(data =>(
          <Table.Row key={data.id}>
          <Table.Cell>{data.firstName}</Table.Cell>
          <Table.Cell>{data.lastName}</Table.Cell>
          <Table.Cell>{data.checked ? "checked":"Not Checked"}</Table.Cell>
          <Table.Cell>
            <Button onClick={()=> deleteUser(data.id)}>Delete</Button>
          </Table.Cell>
          <Table.Cell>
            <Button onClick={()=>updateUser(data.id)}>Update</Button>
          </Table.Cell>
        </Table.Row>
        ))
      }
      </Table.Body>
    </Table>
  );
};

export default Read;
