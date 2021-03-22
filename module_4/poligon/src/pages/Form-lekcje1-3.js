import React from 'react';

// function Form() {

//     const handleSubmit = (e) => {
//         e.preventDefault();
//     }
//     const handleClick = () => console.log('Button React');

//     return (
//         <form onSubmit={handleSubmit}>
//             <button onClick={handleClick}>React Button</button>
//         </form>
//     );
// }

class Form extends React.Component {
    state = {
        name: ""
    }
    //bindowanie zdarzeń w konstruktorze - nie jest zła ale nie najlepsza opcja!
    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     // this.handleClick = this.handleClick.bind(this);
    //     // this.handleSubmit = this.handleSubmit.bind(this);
    // }
    handleSubmit(e) {
        e.preventDefault();
    }
    handleClick(e) {
        console.log("React button");
        console.log("handleClick:", e);
    }
    // handleChange(e) {
    //     //e.target.value
    //     console.log("input value:", e.target.value);
    //     console.log("this:", this);
    //     this.setState({ name: e.target.value });
    // }
    //innym sposobem jest wykorzystanie funkcji strzałkowej, które nie posiada własnego context. JEST TO ZALECANA DOBRA PRAKTYKA!!
    handleChange = (e) => {
        this.setState({ name:e.target.value });
    }
    render() {
        return (
        <form onSubmit={this.handleSubmit}> 
            <input type="text" onChange={this.handleChange} />
            {/*<input type="text" onChange={this.handleChange.bind(this)} />*/} {/*ostatnim sposobem na bindowanie w metodzie render: {this.handleSubmit.bind(this)}. NIE JEST TO DOBRA PRAKTYKA*/}
            <button onClick={this.handleClick}>React Button</button>
        </form>
        );
    }
}

export default Form;