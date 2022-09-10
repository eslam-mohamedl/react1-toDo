import React from 'react'
import './Todolist.css';

 const Todolist = (probs) => {
    const {items, deleteItem} = probs;
    let length = items.length;
    const ListItems = length ? (
      items.map( item => {
         return(
          <div className="main-conent">
          <div className="content" key={item.id}>
             <span  className="child">{item.id}</span>
             <span className="child">{item.name}</span>
             <span className="child">{item.age}</span>
             <span className="closed" onClick={() => deleteItem(item.id)}>&times;</span>
      
          </div>
          </div>
         )
          })
    ) : (
      <p className="message">No items to show</p>
    )
  return (
    <div className="box-containers">
        <div className="listItem">
           <span>id</span> 
           <span>Name</span> 
           <span>age</span> 
           <span>action</span> 


        </div>
        <div className="content-box">
        {ListItems}
        </div>
       
        </div>
  )
}

export default Todolist;

