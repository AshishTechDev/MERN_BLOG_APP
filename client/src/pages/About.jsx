import React from 'react'

export default function About() {
  return (
    <div className='min-h-screen flex items-top justify-center'>
      <div className='max-w-4xl mx-auto p-3 text-center'>
          <div className='mt-24'>
            <h1 className='text-5xl font font-semibold text-center my-12'>About Ashish Blog</h1>
            <div className='text-lg text-gray-500 flex flex-col gap-6'>
                <p>
                  Welcome to Ashish's Blog This blog was created by Ashish Bhandari as a personal project to share his thoughts and ideas with the world. Ashish is a passionate developer who loves to write about technology, coding and everything in between.
                </p>
                <p>
                  On this blog, you'll find weekly articles and tutorials on topics such as web development, software development, and programming languages, Ashish is always learing and exploring new technologies, so be sure to check back often for new content!
                </p>
              <p>
                We encourage you to leave comments on our posts and engage with other readers. You can like other people's comments and reply to them as well. We believe that a community of learners can help each other grow and improve.
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}
