import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const userData = useContext(AuthContext)

  const [taskTitle,setTaskTitle]=useState('')
  const [taskDescription,setTaskDescription]=useState('')
  const [taskdate,setTaskDate]=useState('')
  const [assignTo,setAssignTo]=useState('')
  const [category,setCategory]=useState('')

  const [newTask,setNewTask]=useState({})

  const submitHandler=(e)=>{
    e.preventDefault()

    
    console.log(taskTitle,taskDescription,taskdate,assignTo,category)
    if(!taskTitle || !taskDescription || !taskdate || !assignTo || !category){
      alert("Please fill all the fields")
      return
    }

    setNewTask({ taskTitle,taskDescription,taskdate,category,active:false,newTask:true,failed:false,completed:false})
    const data = userData?.employees || []
    data.forEach(function(elem){
      if(assignTo==elem.firstName){
        elem.tasks.push(newTask)
        elem.taskCounts.newTask=elem.taskCounts.newTask+1
      }
    })
    localStorage.setItem('employees', JSON.stringify(data))
    

    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')
     
  }

  return (
   <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
            <form onSubmit={(e)=>{
              submitHandler(e)
            }}
            className='flex flex-wrap w-full items-start justify-center'>
                <div 
                className='w-1/2'>
                     <div> 
                <h3 
                className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input 
                value={taskTitle}
                onChange={(e)=>{
                  setTaskTitle(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Enter the task title...'/>
                </div>
                    <div>
                    <h3 
                    className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input
                value={taskdate}
                onChange={(e)=>{
                  setTaskDate(e.target.value)
                }}
                 className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='date'/>
                </div>
               <div>
                 <h3 
                 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                <input 
                value={assignTo}
                onChange={(e)=>{
                  setAssignTo(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='employee name...'/>
               </div>
                <div>
                    <h3 
                    className='text-sm text-gray-300'>Category</h3>
                <input 
                value={category}
                onChange={(e)=>{
                  setCategory(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='design, dev, etc...'/>
                </div>
                </div>
               <div 
               className='w-2/5 flex flex-col items-start'>
                 <h3 
                 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea 
                value={taskDescription}
                onChange={(e)=>{
                  setTaskDescription(e.target.value)
                }}
                className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name='' id=''></textarea>
                <button 
                className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full '>Create Task</button>
                </div>
            </form>
        </div>
  )
}

export default CreateTask