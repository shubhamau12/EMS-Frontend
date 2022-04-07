import React, { useState, useEffect } from 'react'
import EmployeeService from '../services/EmployeeService';
import { useParams } from "react-router";
import { Link, useNavigate} from 'react-router-dom';
const AddEmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const { id = 0 } = useParams();
    const saveEmployee = (e) => {

        e.preventDefault();
        const employee = { firstName, lastName, emailId: email }
        EmployeeService.createEmployee(employee).then((response) => {
            navigate('/employee');
        }).catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        if (id)
            EmployeeService.getEmployeeById(id).then((response) => {
                setFirstName(response.data.firstName);
                setlastName(response.data.lastName);
                setEmail(response.data.emailId);
            }).catch(error => {
                console.log(error);
            });
    }, [])

   

    return (
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h2 className="text-center">{id ? "Update Employee" :"Add Employee"}</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">First Name</label>
                                    <input type="text" placeholder="Enter First Name"
                                        name="firstName" className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">last Name</label>
                                    <input type="text" placeholder="Enter last Name"
                                        name="lasttName" className="form-control"
                                        value={lastName}
                                        onChange={(e) => setlastName(e.target.value)}></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Email ID</label>
                                    <input type="text" placeholder="Enter Email Id"
                                        name="Email ID" className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}></input>
                                </div>
                                <button className="btn btn-success ml-4" onClick={(e) => saveEmployee(e)}>Add Record</button>
                                <Link to="/" className="btn btn-danger">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployeeComponent