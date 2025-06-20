 import React from 'react'
 
 const TaskListNumbers = (props) => {
  
   return (
     <div className='flex mt-10 justify-between gap-5 screen'>

        {/* // tasklist1 */}
        <div className='rounded-xl w-[45%] py-6 px-9  bg-red-400'>
            <h2 className='text-3xl font-semibold'>{props.taskCounts.newTask}</h2>
            <h3 className=' text-xl font-medium'>New Task</h3>
        </div>

        {/* //tasklist2 */}
        <div className='rounded-xl w-[45%] py-6 px-9  bg-blue-400'>
            <h2 className='text-3xl font-semibold'>{props.taskCounts.completed}</h2>
            <h3 className=' text-xl font-medium'>Completed Task</h3>
        </div>

        {/* //tasklist3 */}
        <div className='rounded-xl w-[45%] py-6 px-9  bg-green-400'>
            <h2 className='text-3xl font-semibold text-black'>{props.taskCounts.active}</h2>
            <h3 className=' text-xl font-medium text-black'>Accepted Task</h3>
        </div>

        {/* //tasklist3 */}
        <div className='rounded-xl w-[45%] py-6 px-9  bg-yellow-400'>
            <h2 className='text-3xl font-semibold'>{props.taskCounts.failed}</h2>
            <h3 className=' text-xl font-medium'>Failed Task</h3>
        </div>
     </div>
   )
 }
 export default TaskListNumbers