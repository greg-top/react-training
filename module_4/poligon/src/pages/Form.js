import React from 'react';

class Form extends React.Component {
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
    render() {
        return (
        <form onSubmit={this.handleSubmit}> 
            <div>
                <input name="name" type="text" placeholder="Name" onChange={this.handleChange} />
            </div>
            <div>
                <input name="surname" type="text" placeholder="Surname" onChange={this.handleChange} />
            </div>
            <div>
                <input name="age" type="text" placeholder="Age" onChange={this.handleChange} />
            </div>
            <button onClick={this.handleClick}>React Button</button>
        </form>
        );
    }
}

export default Form;