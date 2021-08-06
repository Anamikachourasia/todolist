import React, { useEffect, useState } from 'react';
import '../App.css'
const getLoaclItems=()=>{
    let list= localStorage.getItem('lists');
    if(list)
    return JSON.parse(localStorage.getItem('lists'));
    else
    return [];

}
const Todo=()=>{
    
    const [inputData,setInputData]= useState('');
    const [items,setItems]=useState(getLoaclItems());
    const addItem=()=>{
        if(!inputData)
        {

        }
        else
        {
            const allInputdata={id:new Date().getTime().toString(), name: inputData};
    setItems([...items,allInputdata]);
    setInputData("");
    }
    }
    const deleteItem=(index)=>{
      const updateItem =items.filter((elem)=>{
          return index!== elem.id
      })
      setItems(updateItem)
    }
    const removeAll=()=>{
        setItems([]);
    }
    const editItem=(index)=>{

    }
    useEffect(()=>{
        localStorage.setItem('lists' ,JSON.stringify(items))
    },[items]);
    return (
        <>

        <div className="main-div">
            <div className="child-div">
               <figure>
                   <figcaption>Add Your List Here</figcaption>
               </figure>
               <div className="addItems">
                   <input type="text" placeholder="Add items here....." 
                   value ={inputData}
                   onChange={(e)=>setInputData(e.target.value)}
                   />
                   <i className="fa fa-plus add-btn" onClick={addItem}></i>
               </div>
               
               <div className="showItems">
                   {
               items.map((elem)=>{
                   return (
                    <div className="eachItem" key={elem.id}>
                    <h3>{elem.name }</h3>
                    <div className="todo-btn">
                    {/* <i className="fa fa-edit-alt " title="Delete Item" onClick={()=>editItem(elem.id)}></i> */}
                    <i class="fa fa-trash" title="Delete Item" onClick={()=>deleteItem(elem.id)}></i>
                   
                    </div>
                </div>

                   )
               })
            }
               </div>
               <div className="showItems">
                   <button className="btn effect04" data-sm-link-text="Remove all" onClick={removeAll}><span>Check List</span></button>
               </div>
            </div>
        </div>
        </>
    )
}
export default Todo