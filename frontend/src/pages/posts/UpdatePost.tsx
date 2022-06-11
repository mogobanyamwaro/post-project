import React from 'react'
import Form from '../../components/posts/Form'

function UpdatePost() {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Update a Post</h2>
  <Form isUpdating prevContent='hello we are testing the appliaction' prevTitle='Test'/>
    </div>
  </div>
  )
}

export default UpdatePost