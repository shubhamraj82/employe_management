import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const userData = useContext(AuthContext)
    const employees = userData?.employees || []
     console.log('AllTask userData:', userData)

    if (!userData) {
        return <div className='text-white p-5'>Loading employee data...</div>
    }
    if (!employees.length) {
        return <div className='text-white p-5'>No employee data found.</div>
    }

    return (
      <div  className='bg-[#1c1c1c] p-5 rounded mt-5'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h1 className='text-lg font-medium w-1/5'>Employee Name</h1>
            <h2 className='text-lg font-medium w-1/5'>New Task</h2>
            <h3 className='text-lg font-medium w-1/5'>Active Task</h3>
            <h4 className='text-lg font-medium w-1/5'>Completed</h4>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>
        </div>
        <div className=''>
            {employees.map((elem, idx) => (
                <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
                    <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
                    <h3 className='text-lg font-medium w-1/5 text-blue-400 '>{elem.taskCounts.newTask}</h3>
                    <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
                    <h5 className='text-lg font-medium w-1/5 text-white'>{elem.taskCounts.completed}</h5>
                    <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
                </div>
            ))}
        </div>
      </div>
    )
}

export default AllTask