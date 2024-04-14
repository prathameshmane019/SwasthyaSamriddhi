'use client'
 import { Button,Link } from "@nextui-org/react"
export default function Error({ error, reset }) {
  return (
    <div className='h-[90vh] flex flex-col justify-center items-center'>
      <img
        src="/error.gif"
        alt="error"
        height={500}
        width={500}
        className="mx-auto my-auto"
      />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-[95%]">
        <p>Some internal eror occured</p>
        <Link href="/"><Button variant='ghost' size='lg' color='secondary'>Go Home</Button></Link>
      </div>
    </div>
  )
}
