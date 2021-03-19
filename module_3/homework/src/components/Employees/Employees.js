import React from 'react';

import EmployeesList from './EmployeesList';
import EmployeeDetails from './EmployeeDetails';

import './assets/employees.css';

function Employees() {
    return (
        <div className="employees--outer">
            <EmployeesList />
            <EmployeeDetails />
        </div>
    );
}

export default Employees;