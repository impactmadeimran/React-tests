import React from 'react'

class Test extends React.Component {
    state = {
        name : 'Imran',
        age : 18
    }
    handlechange = (e) =>{
        this.setState({
            name : e.target.value
        });
    }
    render() {
        return (
            <div>
             <h1>My name is {this.state.name}</h1>
             <form>
                 <input type = "text"onChange = {this.handlechange}></input>
             <button>click me</button>
             </form>
                
            </div>
        )
    }
}

export default Test
