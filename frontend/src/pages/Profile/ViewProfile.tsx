import React from 'react'

function ViewProfile() {
  return (
    <div className="bg-white p-3 shadow-sm rounded-sm w-full">
    <div className="text-gray-700">
      <div className="grid md:grid-cols-2 text-sm">
        <div className="grid grid-cols-2 my-3 ">
          <div className="px-2 py-2 font-semibold text-main">
            First Name
          </div>
          <div className=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ">
            {
               'fill in your first name'
            }
          </div>
        </div>
        <div className="grid grid-cols-2 my-3 ">
          <div className="px-2 py-2 font-semibold text-main">
            Last Name
          </div>
          <div className=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ">
            {
              ' Fill your last name'
            }
          </div>
        </div>
        <div className="grid grid-cols-2 my-3">
          <div className="px-2 py-2 font-semibold text-main">
            Email
          </div>
          <div className="px-2 py-2">
            <p className=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ">
              {
                ' Fill your email'
              }
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 my-3">
          <div className="px-2 py-2 font-semibold text-main">
            Phone Number
          </div>
          <div className=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ">
            {
             ' Fill your phone number'
            }
          </div>
        </div>

        <div className="grid grid-cols-2 my-3">
          <div className="px-2 py-2 font-semibold text-main">
            Gender
          </div>
          <div className=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ">
          {
             'Select your Gender'
            }
          </div>
        </div>
        <div className="grid grid-cols-2 my-3">
          <div className="px-2 py-2 font-semibold text-main">
            Country
          </div>
          <div className=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ">
            {' '}
            {
              ' Fill your country'
            }
          </div>
        </div>
        <div className="grid grid-cols-2 my-3">
          <div className="px-2 py-2 font-semibold text-main">
            Country
          </div>
          <div className=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ">
            {' '}
            {
              
                 ' Fill your country'
            }
          </div>
        </div>
        <div className="grid grid-cols-2 my-3">
          <div className="px-2 py-2 font-semibold text-main">
            Registration Status
          </div>
          <div className=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ">
            {' '}
            {
             ' Not Verified'
            }
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ViewProfile