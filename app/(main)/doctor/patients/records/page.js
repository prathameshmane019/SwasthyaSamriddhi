import UserRecords from '@/app/components/records'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <Suspense>
      <UserRecords></UserRecords>
      </Suspense>
    </div>
  )
}

export default page
