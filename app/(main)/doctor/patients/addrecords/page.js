import RegisterHealthRecordComponent from '@/app/components/newrecord'

import React from 'react'
const page = ({searchParams}) => {
  return (
    <div>
      <RegisterHealthRecordComponent search={searchParams}></RegisterHealthRecordComponent>
      


    </div>
  )
}

export default page
