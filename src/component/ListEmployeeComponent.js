import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const ListEmployeeComponent = () => {
   const[employees,setEmployees] =useState([]);

   /*useEffect(()=>{
       EmployeeService.getAllEmployee().then((response)={
        setEmployees(response.data);
        console.log(response.data);

       })
   },[])*/
   useEffect(() => {

    EmployeeService.getAllEmployee().then((response) =>{
        setEmployees(response.data)
        console.log(response.data);
    }).catch(error => {
        console.log(error)
    })
}, [])


  return (
    <div className="container">
      <div className="list-header">
      <h2 className=""> Employees</h2>
      <Link to="/add-employee" className="btn btn-primary mb2" >Add New</Link>
      </div>
     
      <table className="table table-bordered table-striped">
        <thead className="table-head">
            <th>Employee ID</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
            <th>Action</th>
        </thead>
        <tbody>
            {
                employees.map(
                    employee =>
                    <tr key = {employees.id}>
                         <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.emailId}</td>
                        <td >
                          <Link className="btn btn-info" to={`/edit-employee/${employee.id}`}>Update</Link>
                        </td>
                    </tr>
                )
            }
        </tbody>
      </table>

    </div>
  )
}

export default ListEmployeeComponent