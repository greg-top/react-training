import React, { useState } from 'react';

// function useInput( initValue = "" ) {
//     const [value, setValue] = useState(initValue);

//     const handleChange = (e) => {
//         setValue(e.target.value);
//     };

//     return [value, handleChange];
// }

// function Form() {
//     const [name, setName] = useInput();
//     // const [name, setName] = useInput("Jan");
//     const [surname, setSurname] = useInput();
//     const [age, setAge] = useInput();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//     }

//     const handleClick = () => {
//         console.log("React button clicked");
//     }

//     return(
//         <form onSubmit={handleSubmit}> 
//             <div>
//                 <input name="name" type="text" placeholder="Name" onChange={setName} />
//             </div>
//             <div>
//                 <input name="surname" type="text" placeholder="Surname" onChange={setSurname} />
//             </div>
//             <div>
//                 <input name="age" type="text" placeholder="Age" onChange={setAge} />
//             </div>
//             <button onClick={handleClick}>React Button</button>
//         </form>
//     );
// }

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.surnameInput = React.createRef();
    }
    state = {
        name: "",
        surname: "",
        age: ""
    }
    handleSubmit(e) {
        e.preventDefault();
    }
    handleClick(e) {
        console.log("React button");
        console.log("handleClick:", e);
    }
    handleChange = (e) => {
        const keyName = e.target.name;
        const keyValue = e.target.value;

        if(keyValue) this.setState({ [keyName] : e.target.value });
    }

    handleFocusClick = () => {
        this.surnameInput.current.focus();
        this.surnameInput.current.value = "Kowalski";
        this.surnameInput.current.style.color = "#f00";
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}> 
            <div>
                <input name="name" type="text" placeholder="Name" onChange={this.handleChange} />
            </div>
            <div>
                <input name="surname" ref={this.surnameInput} type="text" placeholder="Surname" onChange={this.handleChange} />
            </div>
            <div>
                <input name="age" type="text" placeholder="Age" onChange={this.handleChange} />
            </div>
            <button onClick={this.handleClick}>React Button</button>
            <button onClick={this.handleFocusClick}>Foucs Button</button>
        </form>
        );
    }
}

export default Form;