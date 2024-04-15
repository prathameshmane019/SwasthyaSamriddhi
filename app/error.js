'use client'

import { Button, Link } from '@nextui-org/react'
import Footer from './components/footer'

export default function Error({ error, reset }) {
  return (
    <>
      <div className="h-[90vh] mt-5 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold ">Some internal error occurred</h2>

        <img
          src="/error.gif"
          alt="error"
          height={500}
          width={500}
          className="mx-auto my-auto"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-[95%] text-center">
          <Link href="/">
            <Button variant="ghost" size="lg" color="secondary">
              Go Home
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}