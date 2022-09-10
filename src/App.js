import './App.css';
import React, { Component , useEffect , useState } from 'react';
import AddItem from './Component/AddItem/AddItem';
import Todolist from './Component/ToDoItem/Todolist';
class App extends Component {
     state = {
      items : [
        {id : 1, name : 'eslam', age : 23},
        {id : 2, name : 'ahmed', age : 20}
      ]
     }
  

     deleteItem = (id) =>{
         let item = this.state.items;
         let i = item.findIndex(item => item.id == id)
         item.splice(i,1);
         this.setState({item:item}
          )
     }
    addItem = (item) =>{
      item.id = Math.floor(Math.random() * 10) ;
      let items = this.state.items;
      items.push(item);
      this.setState({items})
    }
  render(){
    return (
      
      <div className="App">
        <div className="main">
        <div className="overlay">
        <h2>My Day <span>Better</span> With <span>To Do</span>
</h2>

          <div className="text-center">
          <AddItem addItem={this.addItem}/>

       <Todolist  items={this.state.items} deleteItem={this.deleteItem}/>

       </div>
       </div>
       </div>
       </div>
    );
  }
}

export default App;

