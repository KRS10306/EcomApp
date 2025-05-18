import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = ({First, Second, Third}) => {

    const navigate = useNavigate()

  return (
    <div className='flex justify-left bg-black h-10 items-center gap-20 p-5'>
        <div className='text-white hover:text-blue-500 hover:cursor-pointer' onClick={()=> navigate('/')}>{First}</div>
        <div className='text-white hover:text-blue-500 hover:cursor-pointer' onClick={()=> navigate(`/${Second}`)}>{Second}</div>
        <div className='text-white hover:text-blue-500 hover:cursor-pointer' onClick={()=> navigate(`/${Third}`)}>{Third}</div>
    </div>
  )
}

export default Header