import React from 'react'

function Dashboard() {
  return (
    <div className='flex flex-row bg-slate-300'>
      <div className=' flex items-center justify-center  w-1/2 p-4'>
        <button className='mr-4 bg-blue-500 text-white rounded-md py-2 px-4'>continue with user1</button>
        <button className='bg-blue-500 text-white rounded-md py-2 px-4'>continue with user2</button>
      </div>
      <div className='w-1/2'>
        <img src="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-full object-cover" alt="" />
      </div>
    </div>
  )
}

export default Dashboard