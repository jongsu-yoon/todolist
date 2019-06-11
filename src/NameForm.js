import React, { Component } from "react";

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.input = React.createRef();
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.input.current.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" ref={this.input} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value : ''};
 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
 
    handleSubmit(e) {
        alert('value - ' + this.state.value);
        e.preventDefault();
    }
 
    onChange(e) {
        this.setState({value: e.target.value});
    }
 
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name :
                    <input type="text" value={this.state.value} onChange={this.onChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NameForm;