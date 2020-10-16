import React, { Component } from 'react'

class AddNinja extends Component {
    state = {
        name : "",
        age : "",
        belt : ""
    };

    handlechange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    handlesubmit = (e) =>{
        e.preventDefault();
        this.props.addninja(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handlesubmit}>
                    <label htmlFor = "name">Name: </label>
                    <input type = "text" id = "name" onChange = {this.handlechange}></input>
                    <br></br>
                    <label htmlFor = "belt">Age: </label>
                    <input type = "text" id = "age" onChange = {this.handlechange}></input>
                    <br></br>
                    <label htmlFor = "belt">Belt: </label>
                    <input type = "text" id = "belt" onChange = {this.handlechange}></input>
                    <br></br>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja
