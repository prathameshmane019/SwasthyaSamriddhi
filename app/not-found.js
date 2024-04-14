import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='h-[90vh] flex flex-col justify-center items-center'>
      <img
        src="/404.gif"
        alt="Not-Found"
        height={500}
        width={500}
        className="mx-auto my-auto"
      />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-[95%]">
        <Link href="/"><Button variant='ghost' size='lg' color='secondary'  >Go Home</Button></Link>
      </div>
    </div>
  )
}

export default NotFound
