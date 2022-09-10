import React, {Component} from 'react'
import './AddItem.css';
 class  AddItem extends Component {
  state = {
    name : '',
    age : ''
  }
  handleChange = (e) =>{
    this.setState({
      [e.target.id] : e.target.value

    })
  }
 handleSubmit = (e) =>{
   e.preventDefault();
   this.props.addItem(this.state)
   this.setState({
    name : '',
    age :''
   })
 }
    render(){
      return (
        <div className="any">
         <div className='container'>
          <div className="box-container">
          <form onSubmit={this.handleSubmit}>
            <input type='text' placeholder='Enter Name...' id="name" onChange={this.handleChange} value={this.state.name} />
            <input type='number' placeholder='Enter age...' id="age" onChange={this.handleChange} value={this.state.age}  />
            <input className="btn" type='submit' value="add" />
            </form>
        </div>
        </div>
        </div>
      )
    }

}

export default AddItem;