import RegisterHealthRecordComponent from '@/app/components/newrecord'

import React from 'react'
const page = ({searchParams}) => {
  return (
    <div className='h-screen'>
      <RegisterHealthRecordComponent  search={searchParams}></RegisterHealthRecordComponent>
  
    </div>
  )
}

export default page
