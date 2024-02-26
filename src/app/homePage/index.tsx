import Details from '@/components/details'
import Items from '@/components/Items'
import React from 'react'

const HomePage = () => {
  return (
    <div className='grid grid-cols-12 p-[50px]'>
     <Details/>
     <Items/>
    </div>
  )
}

export default HomePage