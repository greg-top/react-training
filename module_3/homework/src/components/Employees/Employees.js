import React from 'react';

import './assets/employees.css';

const data = [
    {id: "emp-1", fullName: "Jan Kowalski", pesel: 98241117954, address: "ul. Jabłonowa 47/5, 44-100 Gliwice"},
    {id: "emp-2", fullName: "Michał Kwiatkowski", pesel: 98241117954, address: "ul. Jabłonowa 47/5, 44-100 Gliwice"},
    {id: "emp-3", fullName: "Joanna Pędzel", pesel: 98241117954, address: "ul. Jabłonowa 47/5, 44-100 Gliwice"}
];

const selectEmp = (e) => {
    const employees = [...document.querySelectorAll(".employees__list-element")];
    employees.forEach((id) => {
        if(id.classList.contains("employees__list-element--active")) {
            id.classList.remove("employees__list-element--active");
        }
    });

    const employee = e.target;
    employee.classList.add("employees__list-element--active");

    const id = e.target.dataset.content;

    const el = document.querySelector(`#${id}`);
    
    const allEl = [...document.querySelectorAll(".employee__details")];
    allEl.forEach((el) => {
        if(!el.classList.contains("hidden")) {
            el.classList.add("hidden");
        }
    });

    el.classList.remove("hidden");


}

function Employees() {
    return (
        <div className="employees--outer">
            <div className="employees__list-container">
                <p>Wybierz pracownika z listy</p>
                <ul className="employees__list">
                    {data.map((dataset, index) => {
                        if (index===0) {
                            return <li key={dataset.id} onClick={selectEmp} className="employees__list-element employees__list-element--active" data-content={dataset.id}>{dataset.fullName}</li>
                        } else {
                            return <li key={dataset.id} onClick={selectEmp} className="employees__list-element" data-content={dataset.id}>{dataset.fullName}</li>
                        }
                    })}
                </ul>
            </div>
            <div className="employees__details">
                <p>Dane Pracownika:</p>
                {data.map((dataset, index) => {
                    if (index===0) {
                        return (
                            <div key={dataset.id} className="employee__details" id={dataset.id}>
                                <h3>{dataset.fullName}</h3>
                                <p>Pesel: {dataset.pesel}</p>
                                <address>{dataset.address}</address>
                            </div>
                        );
                    } else {
                        return (
                            <div key={dataset.id} className="employee__details hidden" id={dataset.id}>
                                <h3>{dataset.fullName}</h3>
                                <p>Pesel: {dataset.pesel}</p>
                                <address>{dataset.address}</address>
                            </div>
                        );
                    }
                    })}
            </div>
        </div>
    );
}

export default Employees;