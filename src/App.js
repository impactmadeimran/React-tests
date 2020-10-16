import React from 'react';
import Ninjas from './components/ninjas'
import './App.css';
import AddNinja from './components/AddNinja';


class App extends React.Component {
 
      state = {
      ninjas : [
        {name:"khoby" , age: 12, belt : "blue", id : 1},
        {name:"Naughty" , age: 19, belt : "brown", id : 2},
        {name:"Imran" , age: 18, belt : "black", id : 3}
      ]
    }
    addninja = (ninja) =>{
      ninja.id = Math.random()
      const ninjas = [...this.state.ninjas,ninja]
      this.setState({
        ninjas : ninjas
      });
    }
    deleteNinja = (id) =>{
      const ninjas = this.state.ninjas.filter( ninja =>{
        return ninja.id !== id;
      }
      )
      this.setState({
        ninjas : ninjas
      });
    }
    render(){ 
  return (
    <div className="App">
      <Ninjas deleteNinja = {this.deleteNinja} ninjas = {this.state.ninjas} />
      <AddNinja addninja = {this.addninja}/>
    </div>
  );
 }
}

export default App;
