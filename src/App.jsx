import { useState } from 'react';
import TodoList from './component/TodoList';
import EditForm from './component/EditForm';
import { useEffect } from 'react';

function App() {
  const [todoList,setTodoList]= useState([
    {id:1 , taskName :"Learn Js",done:false},
    {id:2 , taskName:"Assignment",done:false},
    {id:3 , taskName:"Push Git",done:false},
    {id:4 , taskName:"Learn React ",done:false}
  ])
 //Variable creation
const [newTask,setNewTask] = useState("")

// Add Task
const addTask =(e) =>{
  e.preventDefault ()
  if(!newTask){
    alert ("Please Enter The Task")
  } else {
    let newId = todoList.length+1
    let newEntry = {id:newId,taskName:newTask,done:false}
    setTodoList([...todoList,newEntry])
    setNewTask("")
  }
}
useEffect(()=>{
  localStorage.setItem("data",JSON.stringify(todoList))
},[todoList])
//Delete Task
const deleteTask =(id) =>{
  setTodoList(todoList.filter((item)=>{
    return item.id !==id
  }))
}
//donetask
const doneTask=(id) =>{
setTodoList(todoList.map((item)=>{
  return item.id ===id?{...item,done:true}:item
}))
}
//edittask
const editTask=(id)=>{
  setTodoList(todoList.map((item)=>{
    return item.id===id?{...item,isEditing:!item.isEditing}:item
  }))
}
//updatetask
const updateTask=(modifiedTask,id)=>{
  setTodoList(todoList.map((item)=>{
    return item.id===id?{...item,taskName:modifiedTask,isEditing:!item.isEditing}:item
  }))
}
  return (
    <div  className=" h-screen bg-gradient-to-r from-indigo-500 to bg-pink-400 flex flex-col items-center justify-start t-24">
    <h1 className="text-3xl font-bold underline flex justify-center items-center text-black pt-8 ">
       To Do App!  
     </h1>
     <div>
     <form   className="flex gap-6 justify-center items-center  pt-26 py-4 ">
       <input onChange={(e) =>{setNewTask(e.target.value) }} value={newTask} className=" border-2 border-yellow-700 rounded-md  px-2 py-2 outline-none" type="text" placeholder="Enter the task "/>
       <button  onClick={addTask}  className="border-2 border-black p-2 rounded-md text-black text-sm font-serif" >

         Add Task
       </button>
      


     </form>
     </div>
     <div  className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
    {TodoList.map((item,index)=>{ item
      return ( item.isEditing?(<EditForm item = {item}  updateTask={updateTask}/>):(<TodoList item = {item} key={item.id} deleteTask={deleteTask} doneTask={doneTask} editTask={editTask} index={index}/> )
        

      )
    })}

    </div> 
    
    </div>
  )
} 

export default App