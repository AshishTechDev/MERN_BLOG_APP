import React from 'react'
import CallToAction from '../components/CallToAction.jsx' ;

export default function Projects() {
  return (
    <div className='min-h-screen max-w-3xl mx-auto flex justify-top items-center flex-col gap-6 p-3'>
      <h1 className='text-5xl font-semibold mt-24'>Projects</h1>
      <p className='text-md text-gray-500 mt-0 my-12'>Build fun and engaging projects while learning HTML,CSS and Javascript!</p>
      <CallToAction />
    </div>
  )
}
