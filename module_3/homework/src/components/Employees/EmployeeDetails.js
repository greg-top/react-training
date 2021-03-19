import React from 'react';

const data = [
    {id: "emp-1", fullName: "Jan Kowalski", pesel: 98241117954, address: "ul. Jabłonowa 47/5, 44-100 Gliwice"},
    {id: "emp-2", fullName: "Michał Kwiatkowski", pesel: 98241117954, address: "ul. Jabłonowa 47/5, 44-100 Gliwice"},
    {id: "emp-3", fullName: "Joanna Pędzel", pesel: 98241117954, address: "ul. Jabłonowa 47/5, 44-100 Gliwice"}
];

function EmployeeDetails() {
    return (
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
    );
}

export default EmployeeDetails;