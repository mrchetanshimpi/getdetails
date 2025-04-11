import React from 'react'

const Login = () => {
  return (
    <div>
      <div className='h-screen border border-red-700 flex items-center justify-center'>
        <div className='border border-blue-600 h-[550px] w-4xl flex'>
          <div className='border border-yellow-400 w-1/2 py-20'>
            <div className='text-center'>
              <h2 className='text-2xl font-bold'>Login</h2>
              <p className='text-sm'>How to get started</p>
            </div>
            <div className='border border-green-400 text-center my-5'>
              <div>
                <input type="text" className='rounded-lg p-2 bg-purple-300 border-none outline-none w-1/2' placeholder='enter your username'/>
              </div>
              <div>
                <input type="text" className='rounded-lg ' />
              </div>
            </div>
          </div>
          <div className='w-1/2'>kjk</div>
        </div>
      </div>
    </div>
  )
}

export default Login