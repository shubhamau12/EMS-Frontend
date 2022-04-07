import axios from 'axios';
const EMPLOYEE_BASE_REST_API_URL ='http://localhost:9094/api/v1/employee' ;

class EmployeeService {
    getAllEmployee(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL);
    }

    createEmployee(employee){
          return axios.post(EMPLOYEE_BASE_REST_API_URL,employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' +employeeId);

    }
}
export default new EmployeeService();